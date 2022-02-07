import IFindConflictDTO from '@modules/members/dtos/IFindConflict.dto';
import { IUpdateMemberBasicDataDTO } from '@modules/members/dtos/IUpdateMember.dto';
import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { BadRequestException, ConflictException } from '@nestjs/common';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';

interface IRequest {
  repository: IRepositoryMember;
  loggedMember: EntityMember;
  newMemberData: IUpdateMemberBasicDataDTO;
  hashProvider: IHashProvider;
}

const update = async ({
  repository,
  newMemberData,
  hashProvider,
  loggedMember,
}: IRequest): Promise<EntityMember> => {
  if (
    newMemberData.oldPassword &&
    !(await hashProvider.compareHash(
      newMemberData.oldPassword,
      loggedMember.password,
    ))
  ) {
    throw new BadRequestException(['Invalid Old password']);
  }

  await checkConflict(
    {
      email: newMemberData.email,
      login: newMemberData.login,
      linkedin: newMemberData.linkedin,
      lattes: newMemberData.lattes,
      gitHub: newMemberData.gitHub,
      quoteName: newMemberData.quoteName,
    },
    loggedMember.id,
    repository,
  );

  Object.assign(loggedMember, {
    ...newMemberData,
    password:
      newMemberData.oldPassword &&
      (await hashProvider.generateHash(newMemberData.newPassword)),
  });

  return repository.updateSave(loggedMember);
};

const checkConflict = async (
  uniqueDatas: IFindConflictDTO,
  idMemberLogged: string,
  repository: IRepositoryMember,
) => {
  const conflicts: string[] = [];

  await Promise.all(
    Object.keys(uniqueDatas).map(async (attribute) => {
      const attributeExists = await repository.findConflict({
        [attribute]: uniqueDatas[attribute],
      });

      if (attributeExists && attributeExists.id !== idMemberLogged) {
        conflicts.push(
          `The ${attribute} "${uniqueDatas[attribute]}" already exists`,
        );
      }
    }),
  );

  if (conflicts.length > 0) {
    throw new ConflictException(conflicts);
  }
};

export default update;

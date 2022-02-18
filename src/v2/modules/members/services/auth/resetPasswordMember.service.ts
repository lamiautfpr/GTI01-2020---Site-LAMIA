import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import {
  ForbiddenException,
  UnprocessableEntityException,
} from '@nestjs/common';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import { ERRORS_FORBIDDEN } from '@utils/Errors/Forbidden';
import { ERRORS_UNPROCESSABLE_ENTITY } from '@utils/Errors/UnprocessableEntity';

interface IRequest {
  repository: IRepositoryMember;
  loggedMember: EntityMember;
  updatedMember: EntityMember;
  hashProvider: IHashProvider;
}

const resetPassword = async ({
  repository,
  loggedMember,
  updatedMember,
  hashProvider,
}: IRequest): Promise<EntityMember> => {
  if (!hasCreatePermission(loggedMember.patent.id)) {
    throw new ForbiddenException([
      ERRORS_FORBIDDEN.PATENT_DONT_HAVE_PERMISSION_FOR_UPDATE_MEMBER,
    ]);
  }

  if (!process.env.PASSWORD_DEFAULT_MEMBERS) {
    throw new UnprocessableEntityException([
      ERRORS_UNPROCESSABLE_ENTITY.DEFAULT_PASSWORD_NOT_DEFINED,
    ]);
  }

  const password = await hashProvider.generateHash(
    `${process.env.PASSWORD_DEFAULT_MEMBERS}`,
  );

  return repository.updateSave({ ...updatedMember, password });
};

export default resetPassword;

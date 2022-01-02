import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import {
  ForbiddenException,
  UnprocessableEntityException,
} from '@nestjs/common';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';

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
      "Your patent don't have permission for updating patent of the member",
    ]);
  }

  if (!process.env.PASSWORD_DEFAULT_MEMBERS) {
    throw new UnprocessableEntityException([
      "Member's default password not defined",
    ]);
  }

  const password = await hashProvider.generateHash(
    `${process.env.PASSWORD_DEFAULT_MEMBERS}`,
  );

  return repository.updateSave({ ...updatedMember, password });
};

export default resetPassword;

import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import { ForbiddenException } from '@nestjs/common';

interface IRequest {
  repository: IRepositoryMember;
  loggedMember: EntityMember;
  updatedMember: EntityMember;
  newPatent: EntityPatent;
}

const updatePatent = async ({
  repository,
  loggedMember,
  updatedMember,
  newPatent,
}: IRequest): Promise<EntityMember> => {
  if (!hasCreatePermission(loggedMember.patent.id)) {
    throw new ForbiddenException([
      'Your patent not have permission for updating patent of the member',
    ]);
  }

  return repository.updateSave({ ...updatedMember, patent: newPatent });
};

export default updatePatent;

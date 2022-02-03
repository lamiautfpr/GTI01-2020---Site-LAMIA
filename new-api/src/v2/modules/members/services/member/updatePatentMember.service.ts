import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import { ForbiddenException } from '@nestjs/common';
import { ERRORS_FORBIDDEN } from '@utils/Errors/Forbidden';

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
      ERRORS_FORBIDDEN.PATENT_DONT_HAVE_PERMISSION_FOR_UPDATE_MEMBER,
    ]);
  }

  updatedMember.patent = newPatent;

  return repository.updateSave(updatedMember);
};

export default updatePatent;

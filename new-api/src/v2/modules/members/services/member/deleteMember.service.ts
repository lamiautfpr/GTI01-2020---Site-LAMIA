import IDeleteMemberDTO from '@modules/members/dtos/IDeleteMember.dto';
import { hasDeletePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { ForbiddenException } from '@nestjs/common';

interface IRequest extends Omit<IDeleteMemberDTO, 'idMemberLogged'> {
  repository: IRepositoryMember;
  member: EntityMember;
}

const deleteById = async ({
  repository,
  idMemberToDelete,
  member,
}: IRequest): Promise<void> => {
  if (!hasDeletePermission(member.patent.id)) {
    throw new ForbiddenException([
      'Your patent not have permission for deleting a member',
    ]);
  }

  await repository.removeById(idMemberToDelete);
};

export default deleteById;

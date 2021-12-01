import { ConflictException, ForbiddenException } from '@nestjs/common';
import ICreateWorkDTO from '../../dtos/work/ICreateWork.dto';
import IRepositoryWork from '../../repositories/IRepositoryWork';
import { EntityWork } from '../../typeorm/entities/work.entity';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';

interface IRequest {
  newWorkData: ICreateWorkDTO;
  repository: IRepositoryWork;
  member: EntityMember;
}

const create = async ({
  newWorkData,
  member,
  repository,
}: IRequest): Promise<EntityWork> => {
  if (!hasCreatePermission(member.patent.id)) {
    throw new ForbiddenException([
      'Your patent not have permission for creating a new work',
    ]);
  }

  return repository.createSave(newWorkData);
};

export default create;

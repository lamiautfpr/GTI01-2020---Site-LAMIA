import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { ForbiddenException } from '@nestjs/common';
import { ERRORS_FORBIDDEN } from '@utils/Errors/Forbidden';
import ICreateWorkDTO from '../../dtos/work/ICreateWork.dto';
import IRepositoryWork from '../../repositories/IRepositoryWork';
import { EntityWork } from '../../typeorm/entities/work.entity';

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
      ERRORS_FORBIDDEN.PATENT_DONT_HAVE_PERMISSION_FOR_CREATE_WORK,
    ]);
  }

  const { slug } = await repository.createSave(newWorkData);
  return repository.findBySlug(slug);
};

export default create;

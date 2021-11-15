import { ConflictException, ForbiddenException } from '@nestjs/common';
import ICreateTypeDTO from '../../dtos/type/ICreateType.dto';
import IRepositoryType from '../../repositories/IRepositoryType';
import { EntityType } from '../../typeorm/entities/type.entity';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { Unauthorized } from 'v2/utils/Errors/Unauthorized';
import CREATION_PERMISSION_PATENTS from '@modules/members/enums/CREATION_PERMISSION_PATENTS';

const patentMemberEnum = CREATION_PERMISSION_PATENTS;

interface IRequest {
  data: ICreateTypeDTO;
  repository: IRepositoryType;
  member: EntityMember;
}

const create = async ({
  data,
  member,
  repository,
}: IRequest): Promise<EntityType> => {
  if (!member) {
    throw new Unauthorized();
  }

  const { patent } = member;

  if (
    !(
      patentMemberEnum.ADMINISTRATOR === patent.id ||
      patentMemberEnum.COORDINATOR === patent.id
    )
  ) {
    throw new ForbiddenException('Permission denied');
  }

  const type = await repository.findByName(data.name);

  if (type) {
    throw new ConflictException('Type already exists');
  }

  return repository.createSave(data);
};

export default create;

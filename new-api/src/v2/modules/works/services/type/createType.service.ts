import { ConflictException, ForbiddenException } from '@nestjs/common';
import ICreateTypeDTO from '../../dtos/type/ICreateType.dto';
import IRepositoryType from '../../repositories/IRepositoryType';
import { EntityType } from '../../typeorm/entities/type.entity';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { Unauthorized } from 'v2/utils/Errors/Unauthorized';

const patentMemberEnum = ['Administrador', 'Coordenador', 'Orientadores'];

interface IRequest {
  data: ICreateTypeDTO;
  repository: IRepositoryType;
  member: EntityMember;
}

const create = async (params: IRequest): Promise<EntityType> => {
  const { repository, data, member } = params;

  if (!member) {
    throw new Unauthorized();
  }

  const { patent } = member;

  if (!patentMemberEnum.includes(patent.name)) {
    throw new ForbiddenException('Permission denied');
  }

  const type = await repository.findByName(data.name);

  if (type) {
    throw new ConflictException('Type already exists');
  }

  return repository.createSave(data);
};

export default create;

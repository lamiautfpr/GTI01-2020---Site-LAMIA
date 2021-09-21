import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import IRepositoryAreaExpertise from '@modules/works/repositories/IRepositoryAreaExpertise';
import { ConflictException, ForbiddenException } from '@nestjs/common';
import { Unauthorized } from 'v2/utils/Errors/Unauthorized';
import ICreateAreaExpertiseDTO from '../../dtos/areaExpertise/ICreateAreaExpertise.dto';
import { EntityAreaExpertise } from '../../typeorm/entities/areaExpertise.entity';

const patentMemberEnum = ['Administrador', 'Coordenador', 'Orientadores'];
interface IRequest {
  data: ICreateAreaExpertiseDTO;
  repository: IRepositoryAreaExpertise;
  member: EntityMember;
}

const create = async (params: IRequest): Promise<EntityAreaExpertise> => {
  const { repository, data, member } = params;
  // Todo verificar a patente do membro
  if (!member) {
    throw new Unauthorized();
  }

  const { patent } = member;

  if (!patentMemberEnum.includes(patent.name)) {
    throw new ForbiddenException('Permission denied');
  }

  const areaExpertise = await repository.findByName(data.name);

  if (areaExpertise) {
    throw new ConflictException('AreaExpertise already exists');
  }

  return repository.createSave(data);
};

export default create;

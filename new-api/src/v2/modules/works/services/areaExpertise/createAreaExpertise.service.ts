import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import IRepositoryAreaExpertise from '@modules/works/repositories/IRepositoryAreaExpertise';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { Unauthorized } from 'v2/utils/Errors/Unauthorized';
import ICreateAreaExpertiseDTO from '../../dtos/areaExpertise/ICreateAreaExpertise.dto';
import { EntityAreaExpertise } from '../../typeorm/entities/areaExpertise.entity';

interface IRequest {
  data: ICreateAreaExpertiseDTO;
  repository: IRepositoryAreaExpertise;
}

const create = async (params: IRequest): Promise<EntityAreaExpertise> => {
  const { repository, data } = params;

  const areaExpertise = await repository.findByName(data.name);

  if (areaExpertise) {
    throw new ConflictException('AreaExpertise already exists');
  }

  return repository.createSave(data);
};

export default create;

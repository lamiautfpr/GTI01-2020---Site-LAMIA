import { ConflictException } from '@nestjs/common';
import ICreateAreaExpertiseDTO from '../dtos/ICreateAreaExpertise.dto';
import IRepositoryAreaExpertise from '../repositories/IRepositoryAreaExpertise';
import { EntityAreaExpertise } from '../typeorm/entities/areaExpertise.entity';

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

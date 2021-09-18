import IRepositoryAreaExpertise from '@modules/works/repositories/IRepositoryAreaExpertise';
import { ConflictException, ForbiddenException } from '@nestjs/common';
import ICreateAreaExpertiseDTO from '../../dtos/areaExpertise/ICreateAreaExpertise.dto';
import { EntityAreaExpertise } from '../../typeorm/entities/areaExpertise.entity';

interface IRequest {
  data: ICreateAreaExpertiseDTO;
  repository: IRepositoryAreaExpertise;
}

const create = async (params: IRequest): Promise<EntityAreaExpertise> => {
  const { repository, data } = params;
  //Todo verificar a patente do membro
  const areaExpertise = await repository.findByName(data.name);
  // new ForbiddenException
  if (areaExpertise) {
    throw new ConflictException('AreaExpertise already exists');
  }

  return repository.createSave(data);
};

export default create;

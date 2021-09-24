import { ConflictException } from '@nestjs/common';
import ICreateTypeDTO from '../../dtos/type/ICreateType.dto';
import IRepositoryType from '../../repositories/IRepositoryType';
import { EntityType } from '../../typeorm/entities/type.entity';

interface IRequest {
  data: ICreateTypeDTO;
  repository: IRepositoryType;
}

const create = async (params: IRequest): Promise<EntityType> => {
  const { repository, data } = params;

  const type = await repository.findByName(data.name);

  if (type) {
    throw new ConflictException('Type already exists');
  }

  return repository.createSave(data);
};

export default create;

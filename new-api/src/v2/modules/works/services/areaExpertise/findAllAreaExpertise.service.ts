import IOrderAreaExpertiseDTO from '../../dtos/areaExpertise/IOrderAreaExpertise.dto';
import IRepositoryAreaExpertise from '../../repositories/IRepositoryAreaExpertise';
import { EntityAreaExpertise } from '../../typeorm/entities/areaExpertise.entity';

interface IRequest {
  repository: IRepositoryAreaExpertise;
  order?: IOrderAreaExpertiseDTO;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityAreaExpertise[]> => {
  return repository.findAll(order);
};

export default findAll;

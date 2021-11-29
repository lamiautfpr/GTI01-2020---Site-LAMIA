import IOrderTypeDTO from '../../dtos/type/IOrderType.dto';
import IRepositoryType from '../../repositories/IRepositoryType';
import { EntityType } from '../../typeorm/entities/type.entity';

interface IRequest {
  repository: IRepositoryType;
  order?: IOrderTypeDTO;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityType[]> => {
  return repository.findAll(order);
};

export default findAll;

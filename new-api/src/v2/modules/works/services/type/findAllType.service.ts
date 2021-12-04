import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';
import NoContentExcepetion from '../../../../utils/Exceptions/NoContent.exception';
import IRepositoryType from '../../repositories/IRepositoryType';
import { EntityType } from '../../typeorm/entities/type.entity';

interface IRequest {
  repository: IRepositoryType;
  order?: IOrderByDTO<EntityType>;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityType[]> => {
  const types = await repository.findAll(order);

  if (types.length <= 0) {
    throw new NoContentExcepetion();
  }
  return types;
};

export default findAll;

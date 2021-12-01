import IRepositoryWork from '@modules/works/repositories/IRepositoryWork';
import { EntityWork } from '@modules/works/typeorm/entities/work.entity';
import NoContentExcepetion from '../../../../utils/Exceptions/NoContent.exception';
import IOrderTypeDTO from '../../dtos/type/IOrderType.dto';

interface IRequest {
  repository: IRepositoryWork;
  order?: IOrderTypeDTO;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityWork[]> => {
  const works = await repository.findAll(order);

  if (works.length <= 0) {
    throw new NoContentExcepetion();
  }
  return works;
};

export default findAll;

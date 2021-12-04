import IRepositoryPatent from '@modules/members/repositories/IRepositoryPatent';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';
import NoContentExcepetion from '../../../../utils/Exceptions/NoContent.exception';

interface IRequest {
  repository: IRepositoryPatent;
  order?: IOrderByDTO<EntityPatent>;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityPatent[]> => {
  const patents = await repository.findAll(order);

  if (patents.length <= 0) {
    throw new NoContentExcepetion();
  }
  return patents;
};

export default findAll;

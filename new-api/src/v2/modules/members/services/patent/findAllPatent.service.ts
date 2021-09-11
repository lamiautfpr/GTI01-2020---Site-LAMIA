import IRepositoryPatent from '@modules/members/repositories/IRepositoryPatent';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import NoContentExcepetion from 'v2/utils/Exceptions/NoContent.excepetion';
import IOrderPatentDTO from '../../dtos/Patent/IOrderPatent.dto';

interface IRequest {
  repository: IRepositoryPatent;
  order?: IOrderPatentDTO;
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

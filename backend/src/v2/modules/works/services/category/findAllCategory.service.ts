import { EntityCategory } from '@modules/works/typeorm/entities/category.entity';

import IRepositoryCategory from '@modules/works/repositories/IRepositoryCategory';
import NoContentException from '../../../../utils/Exceptions/NoContent.exception';
import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';

interface IRequest {
  repository: IRepositoryCategory;
  order?: IOrderByDTO<EntityCategory>;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityCategory[]> => {
  const categories = await repository.findAll(order);

  if (categories.length <= 0) {
    throw new NoContentException();
  }

  return categories;
};

export default findAll;

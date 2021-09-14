import IOrderCategoryDTO from '@modules/works/dtos/category/IOrderCategory.dto';
import { EntityCategory } from '@modules/works/typeorm/entities/category.entity';

import IRepositoryCategory from '@modules/works/repositories/IRepositoryCategory';
import NoContentException from '../../../../utils/Exceptions/NoContent.exception';

interface IRequest {
  repository: IRepositoryCategory;
  order?: IOrderCategoryDTO;
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

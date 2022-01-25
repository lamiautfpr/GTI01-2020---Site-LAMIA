import IRepositoryCategory from '@modules/works/repositories/IRepositoryCategory';
import { EntityCategory } from '@modules/works/typeorm/entities/category.entity';
import { NotFoundException } from '@nestjs/common';
import { ERRORS_NOT_FOUND } from '@utils/Errors/NotFound';

interface IRequest {
  repository: IRepositoryCategory;
  name?: string;
}

const findOneCategoryByName = async ({
  repository,
  name,
}: IRequest): Promise<EntityCategory> => {
  const category = await repository.findByName(name);

  if (!category) {
    throw new NotFoundException([
      `${ERRORS_NOT_FOUND.NOT_FOUND_CATEGORY_NAME} "${name}""`,
    ]);
  }

  return category;
};

export default findOneCategoryByName;

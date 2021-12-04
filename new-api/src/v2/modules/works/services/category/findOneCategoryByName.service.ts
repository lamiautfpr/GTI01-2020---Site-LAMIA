import IRepositoryCategory from '@modules/works/repositories/IRepositoryCategory';
import { EntityCategory } from '@modules/works/typeorm/entities/category.entity';
import { NotFoundException } from '@nestjs/common';

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
    throw new NotFoundException([`Not found category with name "${name}""`]);
  }

  return category;
};

export default findOneCategoryByName;

import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';
import ICreateCategoryDTO from '../dtos/category/ICreateCategory.dto';
import { EntityCategory } from '../typeorm/entities/category.entity';

export default interface IRepositoryCategory {
  createSave(data: ICreateCategoryDTO): Promise<EntityCategory>;

  findByName(name: string): Promise<EntityCategory | undefined>;

  findAll(
    order?: IOrderByDTO<EntityCategory>,
  ): Promise<EntityCategory[] | undefined>;
}

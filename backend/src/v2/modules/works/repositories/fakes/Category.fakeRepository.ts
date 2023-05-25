import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';
import ICreateCategoryDTO from '@modules/works/dtos/category/ICreateCategory.dto';
import { EntityCategory } from '@modules/works/typeorm/entities/category.entity';
import IRepositoryCategory from '../IRepositoryCategory';

export class FakeRepositoryCategory implements IRepositoryCategory {
  private categories: EntityCategory[];

  constructor() {
    this.categories = [];
  }

  public async createSave(
    data: ICreateCategoryDTO,
  ): Promise<EntityCategory | undefined> {
    const category = new EntityCategory(data);

    this.categories.push(category);

    return category;
  }

  public async findAll(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _order?: IOrderByDTO<EntityCategory>,
  ): Promise<EntityCategory[] | undefined> {
    return this.categories;
  }

  public async findByName(name: string): Promise<EntityCategory | undefined> {
    const category = this.categories.find((cat) => cat.name === name);

    return category;
  }
}

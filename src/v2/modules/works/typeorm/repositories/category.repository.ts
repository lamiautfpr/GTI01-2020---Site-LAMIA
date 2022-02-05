import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';
import ICreateCategoryDTO from '@modules/works/dtos/category/ICreateCategory.dto';
import IFindCategoryDTO from '@modules/works/dtos/category/IFindCategory.dto';
import IRepositoryCategory from '@modules/works/repositories/IRepositoryCategory';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { EntityCategory } from '../entities/category.entity';

@EntityRepository(EntityCategory)
export class RepositoryCategory
  extends Repository<RepositoryCategory>
  implements IRepositoryCategory {
  private ormRepository: Repository<EntityCategory>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityCategory);
  }

  public async createSave(data: ICreateCategoryDTO): Promise<EntityCategory> {
    const category = this.ormRepository.create(data);

    return this.ormRepository.save(category);
  }

  public async updateSave(data: EntityCategory): Promise<EntityCategory> {
    return this.ormRepository.save(data);
  }

  public async findById(id: string): Promise<EntityCategory> {
    return this.ormRepository.findOne(id, { relations: ['works'] });
  }

  public async findByName(name: string): Promise<EntityCategory> {
    const categories = await this.ormRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.works', 'work')
      .leftJoinAndSelect('work.types', 'type')
      .leftJoinAndSelect('work.areaExpertise', 'areaExpertise')
      .where('category.name = :name', { name });

    return categories.getOne();
  }

  public async findAll(
    order?: IOrderByDTO<EntityCategory>,
  ): Promise<EntityCategory[]> {
    return this.ormRepository.find({ order, relations: ['works'] });
  }

  public async findByWhere(
    where: IFindCategoryDTO,
    order?: IOrderByDTO<EntityCategory>,
  ): Promise<EntityCategory[]> {
    return this.ormRepository.find({ order, where, relations: ['works'] });
  }

  public async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

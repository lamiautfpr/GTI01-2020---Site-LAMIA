import ICreateWorkDTO from '@modules/works/dtos/work/ICreateWork.dto';
import IOrderWorkDTO from '@modules/works/dtos/work/IOrderByWork.dto';
import { IPaginationDTO } from '@modules/works/dtos/work/IPaginationWork.dto';
import IRepositoryWork from '@modules/works/repositories/IRepositoryWork';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { EntityWork } from '../entities/work.entity';

@EntityRepository(EntityWork)
export class RepositoryWork
  extends Repository<RepositoryWork>
  implements IRepositoryWork {
  private ormRepository: Repository<EntityWork>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityWork);
  }

  public async createSave(
    data: ICreateWorkDTO,
  ): Promise<EntityWork | undefined> {
    const work = this.ormRepository.create(data);

    return this.ormRepository.save(work);
  }

  public async findBySlug(slug: string): Promise<EntityWork | undefined> {
    return this.ormRepository.findOne({
      where: { slug },
      relations: ['members', 'areaExpertise', 'categories', 'types'],
    });
  }

  public async findAll(
    { skip, take }: IPaginationDTO,
    order?: IOrderWorkDTO,
  ): Promise<{ works: EntityWork[]; totalItems: number } | undefined> {
    const [result, total] = await this.ormRepository.findAndCount({
      order,
      take,
      skip,
      relations: ['members', 'areaExpertise', 'categories', 'types'],
    });

    return {
      works: result,
      totalItems: total,
    };
  }
}

import ICreateWorkDTO from '@modules/works/dtos/work/ICreateWork.dto';
import IOrderWorkDTO from '@modules/works/dtos/work/IOrderWork.dto';
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
    const Work = this.ormRepository.create(data);

    return this.ormRepository.save(Work);
  }

  public async findBySlug(slug: string): Promise<EntityWork | undefined> {
    return this.ormRepository.findOne({ where: { slug } });
  }

  public async findAll(
    order?: IOrderWorkDTO,
  ): Promise<EntityWork[] | undefined> {
    return this.ormRepository.find({ order });
  }
}

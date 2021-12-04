import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import ICreatePatentDTO from '../../dtos/Patent/ICreatePatent.dto';
import IFindPatentDTO from '../../dtos/Patent/IFindPatent.dto';
import IRepositoryPatent from '../../repositories/IRepositoryPatent';
import { EntityPatent } from '../entities/patent.entity';

@EntityRepository(EntityPatent)
export class RepositoryPatent
  extends Repository<RepositoryPatent>
  implements IRepositoryPatent {
  private ormRepository: Repository<EntityPatent>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityPatent);
  }

  public async createSave(data: ICreatePatentDTO): Promise<EntityPatent> {
    const patent = this.ormRepository.create(data);

    return this.ormRepository.save(patent);
  }

  public async updateSave(data: EntityPatent): Promise<EntityPatent> {
    return this.ormRepository.save(data);
  }

  public async findById(id: string): Promise<EntityPatent | undefined> {
    return this.ormRepository.findOne(id);
  }

  //TODO: Update relation
  public async findByName(name: string): Promise<EntityPatent | undefined> {
    const patent = await this.ormRepository.findOne({
      where: { name },
      relations: ['members'],
    });

    const membersWithoutPatent = patent.members.map((member) => {
      delete member.patent;

      return member;
    });

    patent.members = membersWithoutPatent;

    return patent;
  }

  public async findAll(
    order?: IOrderByDTO<EntityPatent>,
  ): Promise<EntityPatent[] | undefined> {
    return this.ormRepository.find({ order });
  }

  public async findByWhere(
    where: IFindPatentDTO,
    order?: IOrderByDTO<EntityPatent>,
  ): Promise<EntityPatent[] | undefined> {
    return this.ormRepository.find({ order, where });
  }

  public async removeById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

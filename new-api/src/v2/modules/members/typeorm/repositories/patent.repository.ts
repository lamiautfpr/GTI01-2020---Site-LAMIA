import { EntityRepository, getRepository, Repository } from 'typeorm';
import ICreateOfficeMemberDTO from '../../dtos/ICreateOfficeMember.dto';
import IFindOfficeMember from '../../dtos/IFindOfficeMember.dto';
import IOrderOfficeMember from '../../dtos/IOrderOfficeMember.dto';
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

  public async createSave(data: ICreateOfficeMemberDTO): Promise<EntityPatent> {
    const patent = this.ormRepository.create(data);

    return this.ormRepository.save(patent);
  }

  public async updateSave(data: EntityPatent): Promise<EntityPatent> {
    return this.ormRepository.save(data);
  }

  public async findById(id: string): Promise<EntityPatent | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async findByName(name: string): Promise<EntityPatent | undefined> {
    return this.ormRepository.findOne({ where: { name } });
  }

  public async findAll(
    order?: IOrderOfficeMember,
  ): Promise<EntityPatent[] | undefined> {
    return this.ormRepository.find({ order });
  }

  public async findByWhere(
    where: IFindOfficeMember,
    order?: IOrderOfficeMember,
  ): Promise<EntityPatent[] | undefined> {
    return this.ormRepository.find({ order, where });
  }

  public async removeById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

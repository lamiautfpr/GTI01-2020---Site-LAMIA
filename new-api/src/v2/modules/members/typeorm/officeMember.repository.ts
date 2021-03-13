import { EntityRepository, getRepository, Repository } from 'typeorm';
import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import IFindOfficeMember from '../dtos/IFindOfficeMember.dto';
import IOrderOfficeMember from '../dtos/IOrderOfficeMember.dto';
import IRepositoryOfficeMember from '../repositories/IRepositoryOfficeMember';
import { EntityOfficeMember } from './officeMember.entity';

@EntityRepository(EntityOfficeMember)
export class RepositoryOfficeMember
  extends Repository<RepositoryOfficeMember>
  implements IRepositoryOfficeMember {
  private ormRepository: Repository<EntityOfficeMember>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityOfficeMember);
  }

  public async createSave(
    data: ICreateOfficeMemberDTO,
  ): Promise<EntityOfficeMember> {
    const officeMember = this.ormRepository.create(data);

    return this.ormRepository.save(officeMember);
  }

  public async updateSave(
    data: EntityOfficeMember,
  ): Promise<EntityOfficeMember> {
    return this.ormRepository.save(data);
  }

  public async findById(id: string): Promise<EntityOfficeMember | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async findAll(
    order?: IOrderOfficeMember,
  ): Promise<EntityOfficeMember[] | undefined> {
    return this.ormRepository.find({ order });
  }

  public async findByWhere(
    where: IFindOfficeMember,
    order?: IOrderOfficeMember,
  ): Promise<EntityOfficeMember[] | undefined> {
    return this.ormRepository.find({ order, where });
  }

  public async removeById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

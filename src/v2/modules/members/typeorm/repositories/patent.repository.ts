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
      order: { name: 'ASC' },
    });

    if (!patent) {
      return undefined;
    }

    /**
     * This "if" is to find Coordenador when find Orientador.
     * Because all Coordenador is an Orientador.
     * The Coordenadores must return before the Orientadores.
     */
    if (name === 'Orientador') {
      const { members } = await this.ormRepository.findOne({
        where: { name: 'Coordenador' },
        relations: ['members'],
        order: { name: 'ASC' },
      });

      patent.members = [...members, ...patent.members];
    }

    /**
     * To avoid redundancy, the patent attribute is removed.
     */
    patent.members = patent.members.map((member) => {
      delete member.patent;
      return member;
    });

    return patent;
  }

  public async findAll(
    order?: IOrderByDTO<EntityPatent>,
  ): Promise<EntityPatent[] | undefined> {
    return this.ormRepository.find({
      order,
      relations: ['members'],
    });
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

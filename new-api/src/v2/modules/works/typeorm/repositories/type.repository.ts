import ICreateTypeDTO from '@modules/works/dtos/type/ICreateType.dto';
import IOrderTypeDTO from '@modules/works/dtos/type/IOrderType.dto';
import IRepositoryType from '@modules/works/repositories/IRepositoryType';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { EntityType } from '../entities/type.entity';

@EntityRepository(EntityType)
export class RepositoryType
  extends Repository<RepositoryType>
  implements IRepositoryType {
  private ormRepository: Repository<EntityType>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityType);
  }

  public async createSave(
    data: ICreateTypeDTO,
  ): Promise<EntityType | undefined> {
    const Type = this.ormRepository.create(data);

    return this.ormRepository.save(Type);
  }

  // Método para retornar todos os dados, em forma de um array
  public async findAll(
    order?: IOrderTypeDTO,
  ): Promise<EntityType[] | undefined> {
    return this.ormRepository.find({ order, relations: ['works'] });
  }

  // Retorna somente um
  public async findByName(name: string): Promise<EntityType | undefined> {
    return this.ormRepository.findOne({
      where: { name },
      relations: ['works'],
    });
  }
}

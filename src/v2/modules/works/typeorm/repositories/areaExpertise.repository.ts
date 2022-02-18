import { EntityRepository, Repository, getRepository } from 'typeorm';

// Interface
import IRepositoryAreaExpertise from '@modules/works/repositories/IRepositoryAreaExpertise';

// Entidade
import { EntityAreaExpertise } from '../entities/areaExpertise.entity';

// DTO
import ICreateAreaExpertiseDTO from '@modules/works/dtos/areaExpertise/ICreateAreaExpertise.dto';
import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';

@EntityRepository(EntityAreaExpertise)
export class RepositoryAreaExpertise
  extends Repository<RepositoryAreaExpertise>
  implements IRepositoryAreaExpertise {
  private ormRepository: Repository<EntityAreaExpertise>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityAreaExpertise);
  }

  public async createSave(
    data: ICreateAreaExpertiseDTO,
  ): Promise<EntityAreaExpertise | undefined> {
    const AreaExpertise = this.ormRepository.create(data);

    return this.ormRepository.save(AreaExpertise);
  }

  // Método para retornar todos os dados, em forma de um array
  public async findAll(
    order?: IOrderByDTO<EntityAreaExpertise>,
  ): Promise<EntityAreaExpertise[] | undefined> {
    return this.ormRepository.find({ order, relations: ['works'] });
  }

  // Retorna somente um
  public async findByName(
    name: string,
  ): Promise<EntityAreaExpertise | undefined> {
    return this.ormRepository.findOne({
      where: { name },
      relations: ['works'],
    });
  }
}

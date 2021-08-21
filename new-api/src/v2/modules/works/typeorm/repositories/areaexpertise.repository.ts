import { EntityRepository, Repository, getRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

// Interface
import IRepositoryAreaExpertise from '@modules/works/repositories/IRepositoryAreaExpertise';

// Entidade
import { EntityAreaExpertise } from '../entities/areaExpertise.entity';

// DTO
import ICreateAreaExpertiseDTO from '@modules/works/dtos/ICreateAreaExpertise.dto';
import IOrderOfficeMemberDTO from '@modules/members/dtos/IOrderOfficeMember.dto';

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
    const { name, description } = data;

    const date = new Date();

    const newData = {
      id: uuidv4(),
      created: date.toString(),
      updateAt: '',
      name,
      description,
    };

    const AreaExpertise = this.ormRepository.create(newData);

    return this.ormRepository.save(AreaExpertise);
  }

  // Método para retornar todos os dados, em forma de um array
  public async findAll(
    order?: IOrderOfficeMemberDTO,
  ): Promise<EntityAreaExpertise[] | undefined> {
    return this.ormRepository.find({ order });
  }

  // Retorna somente um
  public async findByName(
    name: string,
  ): Promise<EntityAreaExpertise | undefined> {
    return this.ormRepository.findOne({ where: { name } });
  }
}

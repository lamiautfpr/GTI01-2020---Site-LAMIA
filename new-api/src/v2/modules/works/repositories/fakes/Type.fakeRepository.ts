// Interface
import IRepositoryType from '@modules/works/repositories/IRepositoryType';

// Entidade
import { EntityType } from '@modules/works/typeorm/entities/type.entity';

// DTO
import ICreateTypeDTO from '@modules/works/dtos/areaExpertise/ICreateType.dto';
import IOrderTypeDTO from '@modules/works/dtos/areaExpertise/IOrderType.dto';

export class FakeRepositoryAreaExpertise implements IRepositoryType {
  private type: EntityType[];

  constructor() {
    this.type = [];
  }

  public async createSave(
    data: ICreateTypeDTO,
  ): Promise<EntityType | undefined> {
    const areaExpertise = new EntityType(data);

    this.type.push(areaExpertise);

    return areaExpertise;
  }

  // Método para retornar todos os dados, em forma de um array
  public async findAll(
    order?: IOrderTypeDTO,
  ): Promise<EntityType[] | undefined> {
    return this.type;
  }

  // Retorna somente um
  public async findByName(name: string): Promise<EntityType | undefined> {
    const areaExpertise = this.type.find((type) => type.name === name);

    return areaExpertise;
  }
}

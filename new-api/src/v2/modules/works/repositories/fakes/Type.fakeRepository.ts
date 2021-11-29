import ICreateTypeDTO from '@modules/works/dtos/type/ICreateType.dto';
import IOrderTypeDTO from '@modules/works/dtos/type/IOrderType.dto';
import IRepositoryType from '@modules/works/repositories/IRepositoryType';
import { EntityType } from '@modules/works/typeorm/entities/type.entity';

export class FakeRepositoryType implements IRepositoryType {
  private types: EntityType[];

  constructor() {
    this.types = [];
  }

  public async createSave(
    data: ICreateTypeDTO,
  ): Promise<EntityType | undefined> {
    const type = new EntityType(data);

    this.types.push(type);

    return type;
  }

  public async findAll(
    order?: IOrderTypeDTO,
  ): Promise<EntityType[] | undefined> {
    return this.types;
  }

  // Retorna somente um
  public async findByName(name: string): Promise<EntityType | undefined> {
    const type = this.types.find((type) => type.name === name);

    return type;
  }
}

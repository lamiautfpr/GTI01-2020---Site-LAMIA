import CREATION_PERMISSION_PATENTS from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';
import ICreateTypeDTO from '@modules/works/dtos/type/ICreateType.dto';
import IRepositoryType from '@modules/works/repositories/IRepositoryType';
import { EntityType } from '@modules/works/typeorm/entities/type.entity';
import { getKeys } from '../../../../utils/handleEnums';

export class FakeRepositoryType implements IRepositoryType {
  private types: EntityType[];

  constructor() {
    this.types = [];
  }

  public async createSave(data: ICreateTypeDTO): Promise<EntityType> {
    const patent = new EntityType(data);

    if (getKeys(CREATION_PERMISSION_PATENTS).includes(data.name)) {
      patent.id = CREATION_PERMISSION_PATENTS[data.name];
    }

    this.types.push(patent);

    return patent;
  }

  public async findByName(name: string): Promise<EntityType | undefined> {
    return this.types.find((patent) => patent.name === name);
  }

  public async findAll(
    order?: IOrderByDTO<EntityType>,
  ): Promise<EntityType[] | undefined> {
    return this.types;
  }
}

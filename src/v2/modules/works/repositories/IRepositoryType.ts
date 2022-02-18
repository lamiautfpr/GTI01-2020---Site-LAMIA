import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';
import ICreateTypeDTO from '../dtos/type/ICreateType.dto';
import { EntityType } from '../typeorm/entities/type.entity';

export default interface IRepositoryType {
  createSave(data: ICreateTypeDTO): Promise<EntityType | undefined>;

  findByName(name: string): Promise<EntityType | undefined>;

  findAll(order?: IOrderByDTO<EntityType>): Promise<EntityType[] | undefined>;
}

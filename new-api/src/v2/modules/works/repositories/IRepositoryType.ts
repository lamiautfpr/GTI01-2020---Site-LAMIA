import ICreateTypeDTO from '../dtos/areaExpertise/ICreateType.dto';
import IOrderTypeDTO from '../dtos/areaExpertise/IOrderType.dto';
import { EntityType } from '../typeorm/entities/type.entity';

export default interface IRepositoryType {
  findByName(name: string): Promise<EntityType | undefined>;

  findAll(order?: IOrderTypeDTO): Promise<EntityType[] | undefined>;

  createSave(data: ICreateTypeDTO): Promise<EntityType | undefined>;
}

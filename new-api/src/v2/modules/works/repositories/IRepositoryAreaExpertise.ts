import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';
import ICreateAreaExpertiseDTO from '../dtos/areaExpertise/ICreateAreaExpertise.dto';

import { EntityAreaExpertise } from '../typeorm/entities/areaExpertise.entity';

export default interface IRepositoryAreaExpertise {
  findByName(name: string): Promise<EntityAreaExpertise | undefined>;

  findAll(
    order?: IOrderByDTO<EntityAreaExpertise>,
  ): Promise<EntityAreaExpertise[] | undefined>;

  createSave(
    data: ICreateAreaExpertiseDTO,
  ): Promise<EntityAreaExpertise | undefined>;
}

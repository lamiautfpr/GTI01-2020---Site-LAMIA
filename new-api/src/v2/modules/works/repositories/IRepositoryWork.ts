import ICreateWorkDTO from '../dtos/work/ICreateWork.dto';
import IOrderWorkDTO from '../dtos/work/IOrderWork.dto';
import { IPaginationDTO } from '../dtos/work/IPaginationWork.dto';
import { EntityWork } from '../typeorm/entities/work.entity';

export default interface IRepositoryWork {
  createSave(data: ICreateWorkDTO): Promise<EntityWork | undefined>;

  findBySlug(slug: string): Promise<EntityWork | undefined>;

  findAll(
    pagination: IPaginationDTO,
    order?: IOrderWorkDTO,
  ): Promise<{ works: EntityWork[]; totalItems: number } | undefined>;
}

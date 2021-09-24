import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryType } from '../typeorm/repositories/type.repository';
import IRepositoryType from '../repositories/IRepositoryType';
import ICreateTypeDTO from '../dtos/type/ICreateType.dto';
import { EntityType } from '../typeorm/entities/type.entity';

// Service
import { create, findAll } from './type';

// Order
import IOrderTypeDTO, {
  ISelectOrderTypeDTO,
} from '../dtos/type/IOrderType.dto';

@Injectable()
export class ServiceType {
  constructor(
    @InjectRepository(RepositoryType)
    private readonly repositoryType: IRepositoryType,
  ) {}

  public async createType(data: ICreateTypeDTO): Promise<EntityType> {
    return create({
      data: data,
      repository: this.repositoryType,
    });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderTypeDTO): Promise<EntityType[]> {
    const order: IOrderTypeDTO = {
      [attribute || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.repositoryType, order });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryAreaExpertise } from '../typeorm/repositories/areaexpertise.repository';
import IRepositoryAreaExpertise from '../repositories/IRepositoryAreaExpertise';
import ICreateAreaExpertiseDTO from '../dtos/ICreateAreaExpertise.dto';
import { EntityAreaExpertise } from '../typeorm/entities/areaExpertise.entity';

// Service
import { create, findAll } from './';

// Order
import IOrderAreaExpertiseDTO, {
  ISelectOrderAreaExpertiseDTO,
} from '../dtos/IOrderAreaExpertise.dto';

@Injectable()
export class ServiceAreaExpertise {
  constructor(
    @InjectRepository(RepositoryAreaExpertise)
    private readonly exampleRepository: IRepositoryAreaExpertise,
  ) {}

  public async createAreaExpertise(
    data: ICreateAreaExpertiseDTO,
  ): Promise<EntityAreaExpertise> {
    return create({
      data: data,
      repository: this.exampleRepository,
    });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderAreaExpertiseDTO): Promise<EntityAreaExpertise[]> {
    const order: IOrderAreaExpertiseDTO = {
      [attribute || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.exampleRepository, order });
  }
}

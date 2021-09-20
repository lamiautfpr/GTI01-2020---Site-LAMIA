import { ServiceMember } from '@modules/members/services/member.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateAreaExpertiseDTO } from '../dtos/areaExpertise/ICreateAreaExpertise.dto';
import IOrderAreaExpertiseDTO, {
  ISelectOrderAreaExpertiseDTO,
} from '../dtos/areaExpertise/IOrderAreaExpertise.dto';
import IRepositoryAreaExpertise from '../repositories/IRepositoryAreaExpertise';
import { EntityAreaExpertise } from '../typeorm/entities/areaExpertise.entity';
import { RepositoryAreaExpertise } from '../typeorm/repositories/areaExpertise.repository';
import { create, findAll, findByIdMember } from './areaExpertise';

@Injectable()
export class ServiceAreaExpertise {
  constructor(
    @InjectRepository(RepositoryAreaExpertise)
    private readonly repositoryAreaExpertise: IRepositoryAreaExpertise,
    private readonly serviceMember: ServiceMember,
  ) {}

  public async createAreaExpertise({
    areaExpertise,
    idMember,
  }: ICreateAreaExpertiseDTO): Promise<EntityAreaExpertise> {
    const member = await findByIdMember({
      serviceMember: this.serviceMember,
      idMember,
    });

    return create({
      data: areaExpertise,
      repository: this.repositoryAreaExpertise,
      member,
    });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderAreaExpertiseDTO): Promise<EntityAreaExpertise[]> {
    const order: IOrderAreaExpertiseDTO = {
      [attribute || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.repositoryAreaExpertise, order });
  }
}

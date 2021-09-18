import { ServiceMember } from '@modules/members/services/member.service';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateAreaExpertiseDTO } from '../dtos/areaExpertise/ICreateAreaExpertise.dto';
import IOrderAreaExpertiseDTO, {
  ISelectOrderAreaExpertiseDTO,
} from '../dtos/areaExpertise/IOrderAreaExpertise.dto';
import IRepositoryAreaExpertise from '../repositories/IRepositoryAreaExpertise';
import { EntityAreaExpertise } from '../typeorm/entities/areaExpertise.entity';
import { RepositoryAreaExpertise } from '../typeorm/repositories/areaExpertise.repository';
import { create, findAll } from './areaExpertise';

@Injectable()
export class ServiceAreaExpertise {
  constructor(
    @InjectRepository(RepositoryAreaExpertise)
    private readonly repositoryAreaExpertise: IRepositoryAreaExpertise, // @Inject('ServiceMember') // private readonly serviceMember: ServiceMember,
    private readonly serviceMember: ServiceMember,
  ) {}

  public async createAreaExpertise({
    areaExpertise,
    idMember,
  }: ICreateAreaExpertiseDTO): Promise<EntityAreaExpertise> {
    //Todo Buscar membro pelo id
    return create({
      data: areaExpertise,
      repository: this.repositoryAreaExpertise,
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

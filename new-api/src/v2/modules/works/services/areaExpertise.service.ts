import { ServiceMember } from '@modules/members/services/member.service';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import BadRequest from 'v2/utils/Errors/BadRequest';
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

    const userAll = await this.serviceMember.findAll({});

    const member = userAll.map((user) => {
      return user.id == idMember ? user : undefined;
    })[0];

    if (!member) {
      throw new BadRequestException('invalid parameter');
    }

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

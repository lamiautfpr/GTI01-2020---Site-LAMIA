import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import { ServiceMember } from '@modules/members/services/member.service';
import IOrderByDTO, {
  ISelectOrderDTO,
} from '@modules/shared/dtos/IOrderBy.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateAreaExpertiseDTO } from '../dtos/areaExpertise/ICreateAreaExpertise.dto';
import IRepositoryAreaExpertise from '../repositories/IRepositoryAreaExpertise';
import { EntityAreaExpertise } from '../typeorm/entities/areaExpertise.entity';
import { RepositoryAreaExpertise } from '../typeorm/repositories/areaExpertise.repository';
import { create, findAll } from './areaExpertise';

@Injectable()
export class ServiceAreaExpertise {
  constructor(
    @InjectRepository(RepositoryAreaExpertise)
    private readonly repositoryAreaExpertise: IRepositoryAreaExpertise,
    private readonly serviceMember: ServiceMember,
  ) {}

  public async createAreaExpertise({
    newExpertiseAreaData,
    idMember,
  }: ICreateAreaExpertiseDTO): Promise<EntityAreaExpertise> {
    const member = await this.serviceMember.findById(idMember);

    if (!member) {
      throw new UnauthorizedException(['I need to be logged in']);
    }

    return create({
      newExpertiseAreaData,
      repository: this.repositoryAreaExpertise,
      member,
    });
  }

  public async findAll({
    orderBy,
    direction,
  }: ISelectOrderDTO): Promise<EntityAreaExpertise[]> {
    const order: IOrderByDTO<EntityAreaExpertise> = {
      [orderBy || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.repositoryAreaExpertise, order });
  }
}

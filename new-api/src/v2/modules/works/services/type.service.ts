import { ServiceMember } from '@modules/members/services/member.service';
import IOrderByDTO, {
  ISelectOrderDTO,
} from '@modules/shared/dtos/IOrderBy.dto';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateTypeDTO } from '../dtos/type/ICreateType.dto';
import IRepositoryType from '../repositories/IRepositoryType';
import { EntityType } from '../typeorm/entities/type.entity';
import { RepositoryType } from '../typeorm/repositories/type.repository';
import { create, findAll } from './type';

@Injectable()
export class ServiceType {
  constructor(
    @InjectRepository(RepositoryType)
    private readonly repositoryType: IRepositoryType,
    private readonly serviceMember: ServiceMember,
  ) {}

  public async createType({
    newTypeData,
    idMember,
  }: ICreateTypeDTO): Promise<EntityType> {
    let member;

    try {
      member = await this.serviceMember.findById(idMember);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new UnauthorizedException(['I need to be logged in']);
      }
      throw error;
    }

    return create({
      newTypeData,
      repository: this.repositoryType,
      member,
    });
  }

  public async findAll({
    orderBy,
    direction,
  }: ISelectOrderDTO): Promise<EntityType[]> {
    const order: IOrderByDTO<EntityType> = {
      [orderBy || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.repositoryType, order });
  }
}

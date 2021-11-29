import { ServiceMember } from '@modules/members/services/member.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateTypeDTO } from '../dtos/type/ICreateType.dto';
import IOrderTypeDTO, {
  ISelectOrderTypeDTO,
} from '../dtos/type/IOrderType.dto';
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
    const member = await this.serviceMember.findById(idMember);

    if (!member) {
      throw new UnauthorizedException(['Member not found']);
    }

    return create({
      newTypeData,
      repository: this.repositoryType,
      member,
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

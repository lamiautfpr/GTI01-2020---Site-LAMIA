import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryType } from '../typeorm/repositories/type.repository';
import IRepositoryType from '../repositories/IRepositoryType';
import { ICreateTypeDTO } from '../dtos/type/ICreateType.dto';
import { EntityType } from '../typeorm/entities/type.entity';
import { ServiceMember } from '@modules/members/services/member.service';
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
    private readonly serviceMember: ServiceMember,
  ) {}

  public async createType({
    type,
    idMember,
  }: ICreateTypeDTO): Promise<EntityType> {
    const member = await this.serviceMember.findByLogin(idMember);
    if (member) {
      throw new Error('already existing member');
    }
    return create({
      data: type,
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

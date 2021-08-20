import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ICreatePatentDTO from '../dtos/Patent/ICreatePatent.dto';
import IOrderPatentDTO, {
  ISelectOrderPatentDTO,
} from '../dtos/Patent/IOrderPatent.dto';
import IRepositoryOfficeMember from '../repositories/IRepositoryPatent';
import { EntityPatent } from '../typeorm/entities/patent.entity';
import { RepositoryPatent } from '../typeorm/repositories/patent.repository';
import { create, findAll } from './officeMember';

@Injectable()
export class ServiceOfficeMember {
  constructor(
    @InjectRepository(RepositoryPatent)
    private readonly officeMemberRepository: IRepositoryOfficeMember,
  ) {}

  public async createOfficeMember(
    data: ICreatePatentDTO,
  ): Promise<EntityPatent> {
    return create({
      data: data,
      repository: this.officeMemberRepository,
    });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderPatentDTO): Promise<EntityPatent[]> {
    const order: IOrderPatentDTO = {
      [attribute || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.officeMemberRepository, order });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import IOrderOfficeMemberDTO, {
  ISelectOrderOfficeMemberDTO,
} from '../dtos/IOrderOfficeMember.dto';
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
    data: ICreateOfficeMemberDTO,
  ): Promise<EntityPatent> {
    return create({
      data: data,
      repository: this.officeMemberRepository,
    });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderOfficeMemberDTO): Promise<EntityPatent[]> {
    const order: IOrderOfficeMemberDTO = {
      [attribute || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.officeMemberRepository, order });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import IOrderOfficeMemberDTO, {
  ISelectOrderOfficeMemberDTO,
} from '../dtos/IOrderOfficeMember.dto';
import IRepositoryOfficeMember from '../repositories/IRepositoryOfficeMember';
import { EntityOfficeMember } from '../typeorm/entities/officeMember.entity';
import { RepositoryOfficeMember } from '../typeorm/repositories/officeMember.repository';
import { create, findAll } from './officeMember';

@Injectable()
export class ServiceOfficeMember {
  constructor(
    @InjectRepository(RepositoryOfficeMember)
    private readonly officeMemberRepository: IRepositoryOfficeMember,
  ) {}

  public async createOfficeMember(
    data: ICreateOfficeMemberDTO,
  ): Promise<EntityOfficeMember> {
    return create({
      data: data,
      repository: this.officeMemberRepository,
    });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderOfficeMemberDTO): Promise<EntityOfficeMember[]> {
    const order: IOrderOfficeMemberDTO = {
      [attribute || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.officeMemberRepository, order });
  }
}

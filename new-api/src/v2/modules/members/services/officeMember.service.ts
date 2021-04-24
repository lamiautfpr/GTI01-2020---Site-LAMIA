import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import IRepositoryOfficeMember from '../repositories/IRepositoryOfficeMember';
import { EntityOfficeMember } from '../typeorm/officeMember.entity';
import { RepositoryOfficeMember } from '../typeorm/officeMember.repository';
import { create, findAll } from './';

@Injectable()
export class ServiceOfficeMember {
  constructor(
    @InjectRepository(RepositoryOfficeMember)
    private readonly exampleRepository: IRepositoryOfficeMember,
  ) {}

  public async createOfficeMember(
    data: ICreateOfficeMemberDTO,
  ): Promise<EntityOfficeMember> {
    return create({
      data: data,
      repository: this.exampleRepository,
    });
  }

  public async findAll(): Promise<EntityOfficeMember[]> {
    return findAll({ repository: this.exampleRepository });
  }
}

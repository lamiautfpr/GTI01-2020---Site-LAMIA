import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import IRepositoryOfficeMember from '../repositories/IRepositoryOfficeMember';
import { EntityOfficeMember } from '../typeorm/officeMember.entity';
import { RepositoryOfficeMember } from '../typeorm/officeMember.repository';
import { create, find } from './officeMember';

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

  public async findAll() {
    return find({ repository: this.exampleRepository });
  }
}

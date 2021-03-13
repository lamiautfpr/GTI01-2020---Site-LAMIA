import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import IRepositoryOfficeMember from '../repositories/IRepositoryOfficeMember';
import { EntityOfficeMember } from '../typeorm/officeMember.entity';
import { RepositoryOfficeMember } from '../typeorm/officeMember.repository';

@Injectable()
export class ServiceOfficeMember {
  constructor(
    @InjectRepository(RepositoryOfficeMember)
    private readonly exampleRepository: IRepositoryOfficeMember,
  ) {}

  // public async createExample(
  //   createExampleDTO: ICreateExampleDTO,
  // ): Promise<ExampleEntity> {
  //   return create({
  //     data: createExampleDTO,
  //     repository: this.exampleRepository,
  //   });
  // }

  // public async findAll() {
  //   return find({ repository: this.exampleRepository });
  // }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { classToClass } from 'class-transformer';
import { ICreateMemberBasicDataDTO } from '../dtos/ICreateMember.dto';
import IRepositoryMember from '../repositories/IRepositoryMember';
import IRepositoryOfficeMember from '../repositories/IRepositoryOfficeMember';
import { EntityMember } from '../typeorm/entities/member.entity';
import { RepositoryMember } from '../typeorm/repositories/member.repository';
import { RepositoryOfficeMember } from '../typeorm/repositories/officeMember.repository';
import { create } from './member';

@Injectable()
export class ServiceMember {
  constructor(
    @InjectRepository(RepositoryMember)
    private readonly memberRepository: IRepositoryMember,

    @InjectRepository(RepositoryOfficeMember)
    private readonly officeMemberRepository: IRepositoryOfficeMember,
  ) {}

  public async createMember(
    data: ICreateMemberBasicDataDTO,
  ): Promise<EntityMember> {
    const newMember = await create({
      data: data,
      repositoryMember: this.memberRepository,
      repositoryOfficeMember: this.officeMemberRepository,
    });

    return classToClass(newMember);
  }

  // public async findAll({
  //   attribute,
  //   direction,
  // }: ISelectOrderMemberDTO): Promise<EntityMember[]> {
  //   const order: IOrderMemberDTO = {
  //     [attribute || 'name']: direction || 'ASC',
  //   };

  //   return findAll({ repository: this.exampleRepository, order });
  // }
}

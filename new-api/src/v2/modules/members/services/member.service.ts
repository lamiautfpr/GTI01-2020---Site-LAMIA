import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import { classToClass } from 'class-transformer';
import { ICreateMemberBasicDataDTO } from '../dtos/ICreateMember.dto';
import IOrderMember, { ISelectOrderMemberDTO } from '../dtos/IOrderMember.dto';
import { IUpdateMemberDTO } from '../dtos/IUpdateMember.dto';
import IRepositoryMember from '../repositories/IRepositoryMember';
import IRepositoryOfficeMember from '../repositories/IRepositoryOfficeMember';
import { EntityMember } from '../typeorm/entities/member.entity';
import { RepositoryMember } from '../typeorm/repositories/member.repository';
import { RepositoryOfficeMember } from '../typeorm/repositories/officeMember.repository';
import * as memberServices from './member';

@Injectable()
export class ServiceMember {
  constructor(
    @InjectRepository(RepositoryMember)
    private readonly memberRepository: IRepositoryMember,

    @InjectRepository(RepositoryOfficeMember)
    private readonly officeMemberRepository: IRepositoryOfficeMember,

    @Inject('HashProvider')
    private readonly hashProvider: IHashProvider,
  ) {}

  public async createMember(
    data: ICreateMemberBasicDataDTO,
  ): Promise<EntityMember> {
    return classToClass(
      await memberServices.create({
        data: data,
        repositoryMember: this.memberRepository,
        repositoryOfficeMember: this.officeMemberRepository,
        hashProvider: this.hashProvider,
      }),
    );
  }

  public async updateMember({
    idMember,
    newMemberData,
  }: IUpdateMemberDTO): Promise<EntityMember> {
    return classToClass(
      await memberServices.update({
        newMemberData: {
          ...newMemberData,
          id: idMember,
        },
        repository: this.memberRepository,
        hashProvider: this.hashProvider,
      }),
    );
  }

  public async updateAvatarMember({
    idMember,
    newMemberData,
  }: IUpdateMemberDTO): Promise<EntityMember> {
    return classToClass(
      await memberServices.update({
        newMemberData: {
          ...newMemberData,
          id: idMember,
        },
        repository: this.memberRepository,
        hashProvider: this.hashProvider,
      }),
    );
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderMemberDTO): Promise<EntityMember[]> {
    const order: IOrderMember = {
      [attribute || 'name']: direction || 'ASC',
    };

    return classToClass(
      await memberServices.findAll({
        repository: this.memberRepository,
        order,
      }),
    );
  }

  public async findByLogin(login: string): Promise<EntityMember> {
    return classToClass(
      memberServices.FindByLogin({
        repository: this.memberRepository,
        login,
      }),
    );
  }

  public async removeById(id: string): Promise<void> {
    await memberServices.remove({ repository: this.memberRepository, id });
  }
}

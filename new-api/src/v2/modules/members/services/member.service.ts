import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ICreateMemberBasicDataDTO } from '../dtos/ICreateMember.dto';
import IDeleteMemberDTO from '../dtos/IDeleteMember.dto';
import IOrderByMember, {
  ISelectOrderMemberDTO,
} from '../dtos/IOrderByMember.dto';
import { IUpdateAvatarMemberDTO } from '../dtos/IUpdateAvatarMember.dto';
import {
  IUpdateMemberDTO,
  IUpdatePatentMemberDTO,
} from '../dtos/IUpdateMember.dto';
import IRepositoryMember from '../repositories/IRepositoryMember';
import IRepositoryPatent from '../repositories/IRepositoryPatent';
import { EntityMember } from '../typeorm/entities/member.entity';
import { RepositoryMember } from '../typeorm/repositories/member.repository';
import { RepositoryPatent } from '../typeorm/repositories/patent.repository';
import * as memberServices from './member';

@Injectable()
export class ServiceMember {
  constructor(
    @InjectRepository(RepositoryMember)
    private readonly memberRepository: IRepositoryMember,

    @InjectRepository(RepositoryPatent)
    private readonly patentRepository: IRepositoryPatent,

    @Inject('HashProvider')
    private readonly hashProvider: IHashProvider,

    @Inject('StorageProvider')
    private readonly storageProvider: IStorageProvider,
  ) {}

  public async createMember(
    data: ICreateMemberBasicDataDTO,
  ): Promise<EntityMember> {
    const memberLogged = await this.getMemberLoggedIn(data.idMemberLogged);

    return memberServices.create({
      memberLogged,
      data: data,
      repositoryMember: this.memberRepository,
      repositoryPatent: this.patentRepository,
      hashProvider: this.hashProvider,
    });
  }

  public async updateMember({
    idMember,
    newMemberData,
  }: IUpdateMemberDTO): Promise<EntityMember> {
    const member = await memberServices.update({
      newMemberData: {
        ...newMemberData,
        id: idMember,
      },
      repository: this.memberRepository,
      hashProvider: this.hashProvider,
    });

    return member;
  }

  public async updateAvatarMember({
    idMember,
    fileName,
  }: IUpdateAvatarMemberDTO): Promise<EntityMember> {
    return memberServices.updateAvatar({
      repository: this.memberRepository,
      id: idMember,
      fileName,
      storageProvider: this.storageProvider,
    });
  }

  public async updatePatentMember({
    idMemberLogged,
    newPatentId,
    updatedMemberLogin,
  }: IUpdatePatentMemberDTO): Promise<EntityMember> {
    const loggedMember = await this.getMemberLoggedIn(idMemberLogged);

    const updatedMember = await this.memberRepository.findByLogin(
      updatedMemberLogin,
    );

    if (!updatedMember) {
      throw new NotFoundException([
        `Not found member with login "${updatedMemberLogin}""`,
      ]);
    }

    const newPatent = await this.patentRepository.findById(newPatentId);

    if (!newPatent) {
      throw new NotFoundException([
        `Not found patent with id "${newPatentId}"`,
      ]);
    }

    return memberServices.updatePatent({
      loggedMember,
      newPatent,
      updatedMember,
      repository: this.memberRepository,
    });
  }

  public async findAll({
    orderBy,
    direction,
  }: ISelectOrderMemberDTO): Promise<EntityMember[]> {
    const order: IOrderByMember = {
      [orderBy || 'name']: direction || 'ASC',
    };

    return memberServices.findAll({
      repository: this.memberRepository,
      order,
    });
  }

  public async findByLogin(login: string): Promise<EntityMember> {
    return memberServices.findByLogin({
      repository: this.memberRepository,
      login,
    });
  }

  public async findById(id: string): Promise<EntityMember> {
    return memberServices.findById({
      repository: this.memberRepository,
      id,
    });
  }

  public async removeById({
    idMemberLogged,
    idMemberToDelete,
  }: IDeleteMemberDTO): Promise<void> {
    const member = await this.getMemberLoggedIn(idMemberLogged);

    await memberServices.remove({
      repository: this.memberRepository,
      idMemberToDelete,
      member,
    });
  }

  private async getMemberLoggedIn(
    idMemberLogged: string,
  ): Promise<EntityMember> {
    let memberLogged: EntityMember | undefined = undefined;

    try {
      memberLogged = await this.findById(idMemberLogged);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new UnauthorizedException([
          'It should be logged in with a valid member',
        ]);
      }
      throw error;
    }
    return memberLogged;
  }
}

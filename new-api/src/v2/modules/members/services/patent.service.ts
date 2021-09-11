import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Unauthorized from 'v2/utils/Errors/Unauthorized';
import { ICreatePatentDTO } from '../dtos/Patent/ICreatePatent.dto';
import IOrderPatentDTO, {
  ISelectOrderPatentDTO,
} from '../dtos/Patent/IOrderPatent.dto';
import IRepositoryMember from '../repositories/IRepositoryMember';
import IRepositoryPatent from '../repositories/IRepositoryPatent';
import { EntityPatent } from '../typeorm/entities/patent.entity';
import { RepositoryMember } from '../typeorm/repositories/member.repository';
import { RepositoryPatent } from '../typeorm/repositories/patent.repository';
import { create, findAll } from './patent';

@Injectable()
export class ServicePatent {
  constructor(
    @InjectRepository(RepositoryPatent)
    private readonly patentRepository: IRepositoryPatent,

    @InjectRepository(RepositoryMember)
    private readonly memberRepository: IRepositoryMember,
  ) {}

  public async createPatent({
    newPatentData,
    idMember,
  }: ICreatePatentDTO): Promise<EntityPatent> {
    const member = await this.memberRepository.findById(idMember);

    if (!member) {
      throw new UnauthorizedException(['Member not found']);
    }

    return create({
      newPatentData,
      member,
      repository: this.patentRepository,
    });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderPatentDTO): Promise<EntityPatent[]> {
    const order: IOrderPatentDTO = {
      [attribute || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.patentRepository, order });
  }
}

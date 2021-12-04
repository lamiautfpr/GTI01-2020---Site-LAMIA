import IOrderByDTO, {
  ISelectOrderDTO,
} from '@modules/shared/dtos/IOrderBy.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreatePatentDTO } from '../dtos/Patent/ICreatePatent.dto';
import IRepositoryMember from '../repositories/IRepositoryMember';
import IRepositoryPatent from '../repositories/IRepositoryPatent';
import { EntityPatent } from '../typeorm/entities/patent.entity';
import { RepositoryMember } from '../typeorm/repositories/member.repository';
import { RepositoryPatent } from '../typeorm/repositories/patent.repository';
import { create, findAll, findOnePatentByName } from './patent';

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
    orderBy,
    direction,
  }: ISelectOrderDTO): Promise<EntityPatent[]> {
    const order: IOrderByDTO<EntityPatent> = {
      [orderBy || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.patentRepository, order });
  }

  public async findOneByName(name: string): Promise<EntityPatent> {
    return findOnePatentByName({ repository: this.patentRepository, name });
  }
}

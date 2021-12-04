import { ServiceMember } from '@modules/members/services/member.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateWorkDTO } from '../dtos/work/ICreateWork.dto';
import IOrderWorkDTO, {
  ISelectOrderWorkDTO,
} from '../dtos/work/IOrderByWork.dto';
import { IPaginationWorkReponseDTO } from '../dtos/work/IPaginationWork.dto';
import IRepositoryWork from '../repositories/IRepositoryWork';
import { EntityWork } from '../typeorm/entities/work.entity';
import { RepositoryWork } from '../typeorm/repositories/work.repository';
import { create, findAll, findWorkBySlug } from './work';

@Injectable()
export class ServiceWork {
  constructor(
    @InjectRepository(RepositoryWork)
    private readonly repositoryWork: IRepositoryWork,

    private readonly serviceMember: ServiceMember,
  ) {}

  public async createWork({
    newWorkData,
    idMember,
  }: ICreateWorkDTO): Promise<EntityWork | void> {
    const member = await this.serviceMember.findById(idMember);

    if (!member) {
      throw new UnauthorizedException(['I need to be logged in']);
    }

    return create({
      newWorkData,
      repository: this.repositoryWork,
      member,
    });
  }

  public async findBySlug(slug: string): Promise<EntityWork> {
    return findWorkBySlug({ repository: this.repositoryWork, slug });
  }

  public async findAll({
    orderBy,
    direction,
    page,
    perPage,
  }: ISelectOrderWorkDTO): Promise<IPaginationWorkReponseDTO> {
    const order: IOrderWorkDTO = {
      [orderBy || 'title']: direction || 'ASC',
    };
    return findAll({
      order,
      repository: this.repositoryWork,
      pagination: { page: page || 1, perPage: perPage || 5 },
    });
  }
}

import { ServiceMember } from '@modules/members/services/member.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateWorkDTO } from '../dtos/work/ICreateWork.dto';
import IOrderWorkDTO, {
  ISelectOrderWorkDTO,
} from '../dtos/work/IOrderWork.dto';
import IRepositoryAreaExpertise from '../repositories/IRepositoryAreaExpertise';
import IRepositoryCategory from '../repositories/IRepositoryCategory';
import IRepositoryType from '../repositories/IRepositoryType';
import IRepositoryWork from '../repositories/IRepositoryWork';
import { EntityWork } from '../typeorm/entities/work.entity';
import { RepositoryAreaExpertise } from '../typeorm/repositories/areaExpertise.repository';
import { RepositoryCategory } from '../typeorm/repositories/category.repository';
import { RepositoryType } from '../typeorm/repositories/type.repository';
import { RepositoryWork } from '../typeorm/repositories/work.repository';
import { create, findAll, findWorkBySlug } from './work';

@Injectable()
export class ServiceWork {
  constructor(
    @InjectRepository(RepositoryWork)
    private readonly repositoryWork: IRepositoryWork,

    @InjectRepository(RepositoryType)
    private readonly repositoryType: IRepositoryType,

    @InjectRepository(RepositoryCategory)
    private readonly categoryRepository: IRepositoryCategory,

    @InjectRepository(RepositoryAreaExpertise)
    private readonly repositoryAreaExpertise: IRepositoryAreaExpertise,

    private readonly serviceMember: ServiceMember,
  ) {}

  public async createWork({
    newWorkData,
    idMember,
  }: ICreateWorkDTO): Promise<EntityWork | void> {
    const member = await this.serviceMember.findById(idMember);

    if (!member) {
      throw new UnauthorizedException(['Member not found']);
    }

    return create({
      newWorkData,
      repository: this.repositoryWork,
      member,
    });
  }

  public async findBySlug(slug: string): Promise<EntityWork | void> {
    // return findWorkBySlug({ repository: this.repositoryWork, order });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderWorkDTO): Promise<EntityWork[] | void> {
    const order: IOrderWorkDTO = {
      [attribute || 'name']: direction || 'ASC',
    };

    // return findAll({ repository: this.repositoryWork, order });
  }
}

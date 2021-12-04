import { ServiceMember } from '@modules/members/services/member.service';
import IOrderByDTO, {
  ISelectOrderDTO,
} from '@modules/shared/dtos/IOrderBy.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateCategoryDTO } from '../dtos/category/ICreateCategory.dto';
import IRepositoryCategory from '../repositories/IRepositoryCategory';
import { EntityCategory } from '../typeorm/entities/category.entity';
import { RepositoryCategory } from '../typeorm/repositories/category.repository';
import { create, findAll } from './category';

@Injectable()
export class ServiceCategory {
  constructor(
    @InjectRepository(RepositoryCategory)
    private readonly categoryRepository: IRepositoryCategory,
    private readonly serviceMember: ServiceMember,
  ) {}

  public async createCategory({
    newCategoryData,
    idMember,
  }: ICreateCategoryDTO): Promise<EntityCategory> {
    const member = await this.serviceMember.findById(idMember);

    if (!member) {
      throw new UnauthorizedException(['Member not found']);
    }

    return create({
      newCategoryData,
      repository: this.categoryRepository,
      member,
    });
  }

  public async findAll({
    orderBy,
    direction,
  }: ISelectOrderDTO): Promise<EntityCategory[]> {
    const order: IOrderByDTO<EntityCategory> = {
      [orderBy || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.categoryRepository, order });
  }
}

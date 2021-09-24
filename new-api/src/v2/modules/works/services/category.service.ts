import { ServiceMember } from '@modules/members/services/member.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateCategoryDTO } from '../dtos/category/ICreateCategory.dto';
import IOrderCategoryDTO, {
  ISelectOrderCategoryDTO,
} from '../dtos/category/IOrderCategory.dto';
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
    category,
    idMember,
  }: ICreateCategoryDTO): Promise<EntityCategory> {
    const member = await this.serviceMember.findByLogin(idMember);

    return create({
      data: category,
      repository: this.categoryRepository,
      member,
    });
  }

  public async findAll({
    attribute,
    direction,
  }: ISelectOrderCategoryDTO): Promise<EntityCategory[]> {
    const order: IOrderCategoryDTO = {
      [attribute || 'name']: direction || 'ASC',
    };

    return findAll({ repository: this.categoryRepository, order });
  }
}

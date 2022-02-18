import { ServiceMember } from '@modules/members/services/member.service';
import IOrderByDTO, {
  ISelectOrderDTO,
} from '@modules/shared/dtos/IOrderBy.dto';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERRORS_UNAUTHORIZED } from '@utils/Errors/Unauthorized';
import { ICreateCategoryDTO } from '../dtos/category/ICreateCategory.dto';
import IRepositoryCategory from '../repositories/IRepositoryCategory';
import { EntityCategory } from '../typeorm/entities/category.entity';
import { RepositoryCategory } from '../typeorm/repositories/category.repository';
import * as services from './category';

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
    let member;

    try {
      member = await this.serviceMember.findById(idMember);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new UnauthorizedException([
          ERRORS_UNAUTHORIZED.YOU_NEED_TO_BE_LOGGED_IN,
        ]);
      }
      throw error;
    }

    return services.create({
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

    return services.findAll({ repository: this.categoryRepository, order });
  }

  public async findOneByName(name: string): Promise<EntityCategory> {
    return services.findOneByName({
      repository: this.categoryRepository,
      name,
    });
  }
}

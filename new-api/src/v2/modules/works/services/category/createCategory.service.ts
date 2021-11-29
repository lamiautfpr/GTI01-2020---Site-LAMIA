import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import ICreateCategoryDTO from '@modules/works/dtos/category/ICreateCategory.dto';
import IRepositoryCategory from '@modules/works/repositories/IRepositoryCategory';

import { EntityCategory } from '@modules/works/typeorm/entities/category.entity';

import { ConflictException, ForbiddenException } from '@nestjs/common';
import { Unauthorized } from 'v2/utils/Errors/Unauthorized';

const patentMemberEnum = ['Administrador', 'Coordenador', 'Orientadores'];
interface IRequest {
  data: ICreateCategoryDTO;
  repository: IRepositoryCategory;
  member: EntityMember;
}

const create = async (params: IRequest): Promise<EntityCategory> => {
  const { repository, data, member } = params;

  if (!member) {
    throw new Unauthorized();
  }

  const { patent } = member;

  if (!patentMemberEnum.includes(patent.name)) {
    throw new ForbiddenException('Permission denied');
  }

  const categoryExists = await repository.findByName(data.name);

  if (categoryExists) {
    throw new ConflictException('Category already exists!');
  }

  return repository.createSave(data);
};

export default create;

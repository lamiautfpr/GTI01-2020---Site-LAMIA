import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import ICreateCategoryDTO from '@modules/works/dtos/category/ICreateCategory.dto';
import IRepositoryCategory from '@modules/works/repositories/IRepositoryCategory';
import { EntityCategory } from '@modules/works/typeorm/entities/category.entity';
import { ConflictException, ForbiddenException } from '@nestjs/common';

interface IRequest {
  newCategoryData: ICreateCategoryDTO;
  repository: IRepositoryCategory;
  member: EntityMember;
}

const create = async ({
  newCategoryData,
  repository,
  member,
}: IRequest): Promise<EntityCategory> => {
  if (!hasCreatePermission(member.patent.id)) {
    throw new ForbiddenException([
      'Your patent not have permission for creating a new patent',
    ]);
  }

  const categoryExists = await repository.findByName(newCategoryData.name);

  if (categoryExists) {
    throw new ConflictException(['Category already exists']);
  }

  return repository.createSave(newCategoryData);
};

export default create;

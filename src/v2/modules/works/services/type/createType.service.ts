import { ConflictException, ForbiddenException } from '@nestjs/common';
import ICreateTypeDTO from '../../dtos/type/ICreateType.dto';
import IRepositoryType from '../../repositories/IRepositoryType';
import { EntityType } from '../../typeorm/entities/type.entity';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import { ERRORS_FORBIDDEN } from '@utils/Errors/Forbidden';

interface IRequest {
  newTypeData: ICreateTypeDTO;
  repository: IRepositoryType;
  member: EntityMember;
}

const create = async ({
  newTypeData,
  member,
  repository,
}: IRequest): Promise<EntityType> => {
  if (!hasCreatePermission(member.patent.id)) {
    throw new ForbiddenException([
      ERRORS_FORBIDDEN.PATENT_DONT_HAVE_PERMISSION_FOR_CREATE_TYPE,
    ]);
  }

  const typeExists = await repository.findByName(newTypeData.name);

  if (typeExists) {
    throw new ConflictException('Type already exists');
  }

  return repository.createSave(newTypeData);
};

export default create;

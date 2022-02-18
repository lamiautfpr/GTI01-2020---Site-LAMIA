import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import IRepositoryAreaExpertise from '@modules/works/repositories/IRepositoryAreaExpertise';
import { ConflictException, ForbiddenException } from '@nestjs/common';
import { ERRORS_FORBIDDEN } from '@utils/Errors/Forbidden';
import ICreateAreaExpertiseDTO from '../../dtos/areaExpertise/ICreateAreaExpertise.dto';
import { EntityAreaExpertise } from '../../typeorm/entities/areaExpertise.entity';

interface IRequest {
  newExpertiseAreaData: ICreateAreaExpertiseDTO;
  repository: IRepositoryAreaExpertise;
  member: EntityMember;
}

const create = async ({
  newExpertiseAreaData,
  repository,
  member,
}: IRequest): Promise<EntityAreaExpertise> => {
  if (!hasCreatePermission(member.patent.id)) {
    throw new ForbiddenException([
      ERRORS_FORBIDDEN.PATENT_DONT_HAVE_PERMISSION_FOR_CREATE_AREA_EXPERTISE,
    ]);
  }

  const expertiseAreaExists = await repository.findByName(
    newExpertiseAreaData.name,
  );

  if (expertiseAreaExists) {
    throw new ConflictException([
      ` The expertise area "${expertiseAreaExists.name}" already exists`,
    ]);
  }

  return repository.createSave(newExpertiseAreaData);
};

export default create;

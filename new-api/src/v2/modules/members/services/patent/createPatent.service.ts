import { ICreatePatentServiceDTO } from '@modules/members/dtos/Patent/ICreatePatent.dto';
import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import IRepositoryPatent from '@modules/members/repositories/IRepositoryPatent';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import { ConflictException, ForbiddenException } from '@nestjs/common';
import { ERRORS_FORBIDDEN } from '@utils/Errors/Forbidden';

interface IRequest extends ICreatePatentServiceDTO {
  repository: IRepositoryPatent;
}

const create = async ({
  repository,
  newPatentData,
  member,
}: IRequest): Promise<EntityPatent> => {
  if (!hasCreatePermission(member.patent.id)) {
    throw new ForbiddenException([
      ERRORS_FORBIDDEN.PATENT_DONT_HAVE_PERMISSION_FOR_CREATE_PATENT,
    ]);
  }

  const patentExists = await repository.findByName(newPatentData.name);

  if (patentExists) {
    throw new ConflictException(['Patent already exists']);
  }

  return repository.createSave(newPatentData);
};

export default create;

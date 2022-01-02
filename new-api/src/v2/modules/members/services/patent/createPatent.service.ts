import { ICreatePatentServiceDTO } from '@modules/members/dtos/Patent/ICreatePatent.dto';
import { hasCreatePermission } from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import IRepositoryPatent from '@modules/members/repositories/IRepositoryPatent';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import { ConflictException, ForbiddenException } from '@nestjs/common';

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
      "Your patent don't have permission for creating a new patent",
    ]);
  }

  const patentExists = await repository.findByName(newPatentData.name);

  if (patentExists) {
    throw new ConflictException(['Patent already exists']);
  }

  return repository.createSave(newPatentData);
};

export default create;

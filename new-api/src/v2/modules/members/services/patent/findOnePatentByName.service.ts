import IRepositoryPatent from '@modules/members/repositories/IRepositoryPatent';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import { NotFoundException } from '@nestjs/common';

interface IRequest {
  repository: IRepositoryPatent;
  name: string;
}

const findOnePatentByName = async ({
  repository,
  name,
}: IRequest): Promise<EntityPatent> => {
  const patent = await repository.findByName(name);

  if (!patent) {
    throw new NotFoundException([`Not found patent "${name}"`]);
  }
  return patent;
};

export default findOnePatentByName;

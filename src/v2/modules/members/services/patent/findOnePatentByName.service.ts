import IRepositoryPatent from '@modules/members/repositories/IRepositoryPatent';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import { NotFoundException } from '@nestjs/common';
import { ERRORS_NOT_FOUND } from '@utils/Errors/NotFound';

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
    throw new NotFoundException([
      `${ERRORS_NOT_FOUND.NOT_FOUND_PATENT_NAME} "${name}"`,
    ]);
  }
  return patent;
};

export default findOnePatentByName;

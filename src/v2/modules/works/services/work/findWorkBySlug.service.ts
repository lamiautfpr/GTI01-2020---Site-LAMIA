import IRepositoryWork from '@modules/works/repositories/IRepositoryWork';
import { EntityWork } from '@modules/works/typeorm/entities/work.entity';
import { NotFoundException } from '@nestjs/common';
import { ERRORS_NOT_FOUND } from '@utils/Errors/NotFound';

interface IRequest {
  repository: IRepositoryWork;
  slug: string;
}

const findWorkBySlug = async ({
  repository,
  slug,
}: IRequest): Promise<EntityWork> => {
  const work = await repository.findBySlug(slug);

  if (!work) {
    throw new NotFoundException([
      `${ERRORS_NOT_FOUND.NOT_FOUND_WORK_SLUG} "${slug}"`,
    ]);
  }
  return work;
};

export default findWorkBySlug;

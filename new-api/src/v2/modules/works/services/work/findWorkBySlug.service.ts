import IRepositoryWork from '@modules/works/repositories/IRepositoryWork';
import { EntityWork } from '@modules/works/typeorm/entities/work.entity';
import { NotFoundException } from '@nestjs/common';

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
    throw new NotFoundException('Not found work');
  }
  return work;
};

export default findWorkBySlug;

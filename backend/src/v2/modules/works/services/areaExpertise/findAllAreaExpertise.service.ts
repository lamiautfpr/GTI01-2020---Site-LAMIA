import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';
import NoContentExcepetion from '../../../../utils/Exceptions/NoContent.exception';
import IRepositoryAreaExpertise from '../../repositories/IRepositoryAreaExpertise';
import { EntityAreaExpertise } from '../../typeorm/entities/areaExpertise.entity';

interface IRequest {
  repository: IRepositoryAreaExpertise;
  order?: IOrderByDTO<EntityAreaExpertise>;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityAreaExpertise[]> => {
  const expertiseAreas = await repository.findAll(order);

  if (expertiseAreas.length <= 0) {
    throw new NoContentExcepetion();
  }
  return expertiseAreas;
};

export default findAll;

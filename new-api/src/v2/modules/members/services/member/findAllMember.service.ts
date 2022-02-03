import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import IOrderByMember from '../../dtos/IOrderByMember.dto';
import NoContentExcepetion from '../../../../utils/Exceptions/NoContent.exception';

interface IRequest {
  repository: IRepositoryMember;
  order?: IOrderByMember;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityMember[]> => {
  const memebers = await repository.findAll(order);

  if (memebers.length <= 0) {
    throw new NoContentExcepetion();
  }
  return memebers;
};

export default findAll;

import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import IOrderByMember from '../../dtos/IOrderByMember.dto';
import NoContentException from '../../../../utils/Exceptions/NoContent.exception';

interface IRequest {
  repository: IRepositoryMember;
  order?: IOrderByMember;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityMember[]> => {
  const members = await repository.findAll(order);

  if (members.length <= 0) {
    throw new NoContentException();
  }
  return members;
};

export default findAll;

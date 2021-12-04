import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import IOrderByMember from '../../dtos/IOrderByMember.dto';

interface IRequest {
  repository: IRepositoryMember;
  order?: IOrderByMember;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityMember[]> => {
  return repository.findAll(order);
};

export default findAll;

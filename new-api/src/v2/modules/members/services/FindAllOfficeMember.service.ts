import IRepositoryOfficeMember from '@modules/members/repositories/IRepositoryOfficeMember';
import { EntityOfficeMember } from '@modules/members/typeorm/officeMember.entity';
import IOrderOfficeMemberDTO from '../dtos/IOrderOfficeMember.dto';

interface IRequest {
  repository: IRepositoryOfficeMember;
  order?: IOrderOfficeMemberDTO;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityOfficeMember[]> => {
  console.log(order);
  return repository.findAll(order);
};

export default findAll;

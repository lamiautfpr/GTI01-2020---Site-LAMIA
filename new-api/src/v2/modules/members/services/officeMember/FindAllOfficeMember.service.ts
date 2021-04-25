import IRepositoryOfficeMember from '@modules/members/repositories/IRepositoryOfficeMember';
import { EntityOfficeMember } from '@modules/members/typeorm/entities/officeMember.entity';
import IOrderOfficeMemberDTO from '../../dtos/IOrderOfficeMember.dto';

interface IRequest {
  repository: IRepositoryOfficeMember;
  order?: IOrderOfficeMemberDTO;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityOfficeMember[]> => {
  return repository.findAll(order);
};

export default findAll;

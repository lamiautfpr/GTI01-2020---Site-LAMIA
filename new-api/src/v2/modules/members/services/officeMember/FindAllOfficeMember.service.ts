import IRepositoryPatent from '@modules/members/repositories/IRepositoryPatent';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import IOrderOfficeMemberDTO from '../../dtos/IOrderOfficeMember.dto';

interface IRequest {
  repository: IRepositoryPatent;
  order?: IOrderOfficeMemberDTO;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityPatent[]> => {
  return repository.findAll(order);
};

export default findAll;

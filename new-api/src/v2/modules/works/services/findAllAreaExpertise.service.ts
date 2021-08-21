import IOrderOfficeMemberDTO from '@modules/members/dtos/IOrderOfficeMember.dto';
import IRepositoryAreaExpertise from '../repositories/IRepositoryAreaExpertise';
import { EntityAreaExpertise } from '../typeorm/entities/areaExpertise.entity';

interface IRequest {
  repository: IRepositoryAreaExpertise;
  order?: IOrderOfficeMemberDTO;
}

const findAll = async ({
  repository,
  order,
}: IRequest): Promise<EntityAreaExpertise[]> => {
  return repository.findAll(order);
};

export default findAll;

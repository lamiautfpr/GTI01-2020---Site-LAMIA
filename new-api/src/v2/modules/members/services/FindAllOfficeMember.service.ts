import IRepositoryOfficeMember from '@modules/members/repositories/IRepositoryOfficeMember';
import { EntityOfficeMember } from '@modules/members/typeorm/officeMember.entity';

interface IRequest {
  repository: IRepositoryOfficeMember;
}

const findAll = async (params: IRequest): Promise<EntityOfficeMember[]> => {
  const { repository } = params;

  return repository.findAll({ createAt: 'DESC' });
};

export default findAll;

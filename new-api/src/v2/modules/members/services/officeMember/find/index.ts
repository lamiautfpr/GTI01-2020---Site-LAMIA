import IRepositoryOfficeMember from '@modules/members/repositories/IRepositoryOfficeMember';
import { EntityOfficeMember } from '@modules/members/typeorm/officeMember.entity';

interface IRequest {
  repository: IRepositoryOfficeMember;
}

export const find = async (params: IRequest): Promise<EntityOfficeMember[]> => {
  const { repository } = params;

  return repository.findAll({ createAt: 'DESC' });
};

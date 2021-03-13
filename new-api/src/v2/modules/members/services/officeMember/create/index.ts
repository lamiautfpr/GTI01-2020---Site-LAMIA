import ICreateOfficeMemberDTO from '@modules/members/dtos/ICreateOfficeMember.dto';
import IRepositoryOfficeMember from '@modules/members/repositories/IRepositoryOfficeMember';
import { EntityOfficeMember } from '@modules/members/typeorm/officeMember.entity';

interface IRequest {
  data: ICreateOfficeMemberDTO;
  repository: IRepositoryOfficeMember;
}

export const create = async (params: IRequest): Promise<EntityOfficeMember> => {
  const { repository, data } = params;

  const officeExists = await repository.findByName(data.name);

  if (officeExists) {
    throw new Error('Office member already exists');
  }

  return repository.createSave(data);
};

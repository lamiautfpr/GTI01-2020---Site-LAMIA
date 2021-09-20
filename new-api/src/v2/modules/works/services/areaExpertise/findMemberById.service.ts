import { ServiceMember } from '@modules/members/services/member.service';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { Unauthorized } from 'v2/utils/Errors/Unauthorized';

interface IRequest {
  serviceMember: ServiceMember;
  idMember: string;
}

const findByIdMember = async ({
  serviceMember,
  idMember,
}: IRequest): Promise<EntityMember> => {
  const userAll = await serviceMember.findAll({});

  const member = userAll.map((user) => {
    return user.id == idMember ? user : undefined;
  })[0];

  if (!member) {
    throw new Unauthorized();
  }

  return member;
};

export default findByIdMember;

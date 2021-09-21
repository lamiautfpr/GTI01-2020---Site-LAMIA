import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { NotFoundException } from '@nestjs/common';

interface IRequest {
  repository: IRepositoryMember;
  id: string;
}

const findById = async ({
  repository,
  id,
}: IRequest): Promise<EntityMember> => {
  const member = repository.findById(id);

  if (!member) {
    throw new NotFoundException('Member not exist');
  }

  return member;
};

export default findById;

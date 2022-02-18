import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { NotFoundException } from '@nestjs/common';
import { ERRORS_NOT_FOUND } from '@utils/Errors/NotFound';

interface IRequest {
  repository: IRepositoryMember;
  id: string;
}

const findById = async ({
  repository,
  id,
}: IRequest): Promise<EntityMember> => {
  const member = await repository.findById(id);

  if (!member) {
    throw new NotFoundException([
      `${ERRORS_NOT_FOUND.NOT_FOUND_LOGIN} "${id}"`,
    ]);
  }

  return member;
};

export default findById;

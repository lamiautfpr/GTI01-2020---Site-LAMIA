import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { NotFoundException } from '@nestjs/common';
import { ERRORS_NOT_FOUND } from '@utils/Errors/NotFound';

interface IRequest {
  repository: IRepositoryMember;
  login: string;
}

const findByLogin = async ({
  repository,
  login,
}: IRequest): Promise<EntityMember> => {
  const member = await repository.findByLogin(login);

  if (!member) {
    throw new NotFoundException([
      `${ERRORS_NOT_FOUND.NOT_FOUND_LOGIN} "${login}"`,
    ]);
  }

  return member;
};

export default findByLogin;

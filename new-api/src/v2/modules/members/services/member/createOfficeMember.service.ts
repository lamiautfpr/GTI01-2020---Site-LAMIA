import { ICreateMemberBasicDataDTO } from '@modules/members/dtos/ICreateMember.dto';
import IRepositoryMember from '@modules/members/repositories/IRepositoryMember';
import IRepositoryOfficeMember from '@modules/members/repositories/IRepositoryOfficeMember';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { BadRequestException, ConflictException } from '@nestjs/common';

interface IRequest {
  data: ICreateMemberBasicDataDTO;
  repositoryMember: IRepositoryMember;
  repositoryOfficeMember: IRepositoryOfficeMember;
}

const create = async (params: IRequest): Promise<EntityMember> => {
  const { repositoryMember, repositoryOfficeMember, data } = params;

  const emailExists = await repositoryMember.findByEmail(data.email);
  console.log(data.email);
  console.log('---');
  console.log(emailExists);

  if (emailExists) {
    throw new ConflictException('Email already exists');
  }

  const patent = await repositoryOfficeMember.findById(data.patentId);

  if (!patent) {
    throw new BadRequestException('Patent not found');
  }

  const login = await createLogin(data.email, repositoryMember);

  return repositoryMember.createSave({
    email: data.email,
    name: data.name,
    login,
    password: 'teste',
    patent,
  });
};

const createLogin = async (
  email: string,
  repositoryMember: IRepositoryMember,
): Promise<string> => {
  const preLogin = email.split('@')[0];
  let login = preLogin;
  const [members, quantity] = await repositoryMember.countLogin(login);

  if (quantity > 0) {
    let existsLogin: EntityMember | undefined;
    let count = quantity;
    do {
      login = `${preLogin}_${count}`;
      existsLogin = members.find((members) => members.login === login);
      count++;
    } while (existsLogin);
  }

  return login;
};

export default create;

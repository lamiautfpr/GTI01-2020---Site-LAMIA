import { FakeRepositoryMember } from '../repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '../repositories/fakes/Patent.fakeRepository';
import { EntityMember } from '../typeorm/entities/member.entity';

interface IGiveAMeAValidMember {
  patentName: string;
  email?: string;
  login?: string;
  name?: string;
  password?: string;
  fakeRepositoryPatent: FakeRepositoryPatent;
  fakeRepositoryMember: FakeRepositoryMember;
}

export default class MembersMock {
  static async giveAMeAValidMember({
    patentName,
    email,
    login,
    name,
    password,
    fakeRepositoryPatent,
    fakeRepositoryMember,
  }: IGiveAMeAValidMember): Promise<EntityMember> {
    const patent = await fakeRepositoryPatent.createSave({
      name: patentName,
    });

    return fakeRepositoryMember.createSave({
      email: email || 'user.mock@test.com',
      login: login || 'user.mock',
      name: name || 'User Mock',
      password: password || 'fake password',
      patent,
    });
  }
}

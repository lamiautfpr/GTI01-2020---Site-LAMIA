import { FakeRepositoryMember } from '../repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '../repositories/fakes/Patent.fakeRepository';
import { EntityMember } from '../typeorm/entities/member.entity';

interface IGiveAMeAValidMember {
  patentName: string;
  fakeRepositoryPatent: FakeRepositoryPatent;
  fakeRepositoryMember: FakeRepositoryMember;
}

export default class MembersMock {
  static async giveAMeAValidMember({
    patentName,
    fakeRepositoryPatent,
    fakeRepositoryMember,
  }: IGiveAMeAValidMember): Promise<EntityMember> {
    const patent = await fakeRepositoryPatent.createSave({
      name: patentName,
    });

    return fakeRepositoryMember.createSave({
      email: 'user.mock@test.com',
      login: 'user.mock',
      name: 'User Mock',
      password: 'fake password',
      patent,
    });
  }
}

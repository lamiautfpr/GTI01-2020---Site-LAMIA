import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { NotFoundException } from '@nestjs/common';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceMember } from '../member.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;

let iHashProvider: IHashProvider;
let iStorageProver: IStorageProvider;

let serviceMember: ServiceMember;

describe('Find Member by LOGGIN  - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();
    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      iHashProvider,
      iStorageProver,
    );
  });

  describe('successful cases', () => {
    it('should return a member when member login exist', async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const result = await serviceMember.findByLogin(member.login);

      expect(result).toBeInstanceOf(EntityMember);
      expect(member.login).toBe(member.login);
    });

    it('should return NOT_FOUNT when no member login exists', async () => {
      let error;
      const logginMocked = 'loggin not exist';

      try {
        await serviceMember.findByLogin(logginMocked);
      } catch (err) {
        error = err;
      }

      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.response.message).toStrictEqual([
        `Not found member with loggin "${logginMocked}"`,
      ]);
    });
  });
});

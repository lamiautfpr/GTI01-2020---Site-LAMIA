import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import NoContentException from '../../../../utils/Exceptions/NoContent.exception';
import { ServiceMember } from '../member.service';
import { ServicePatent } from '../patent.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;

let iHashProvider: IHashProvider;
let iStorageProver: IStorageProvider;

let serviceMember: ServiceMember;

describe('Find all Members - SERVICES', () => {
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
    it('should return a list of members when at least one members exist', async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'COORDINATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const member2 = await MembersMock.giveAMeAValidMember({
        patentName: 'ADVISOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const result = await serviceMember.findAll({});

      expect(result.length).toBe(2);
      expect(result[0].patent).toBe(member.patent);
      expect(result[1].patent).toBe(member2.patent);
    });

    it('should return NO_CONTENT when no patent exists', async () => {
      await expect(serviceMember.findAll({})).rejects.toBeInstanceOf(
        NoContentException,
      );
    });
  });
});

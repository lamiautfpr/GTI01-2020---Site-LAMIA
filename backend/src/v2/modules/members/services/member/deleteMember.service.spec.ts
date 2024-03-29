import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { ForbiddenException, UnauthorizedException } from '@nestjs/common';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import FakeStorageProvider from '@providers/StorageProvider/implementations/fakes/FakeStorage.provider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ERRORS_FORBIDDEN } from '@utils/Errors/Forbidden';
import { ERRORS_UNAUTHORIZED } from '@utils/Errors/Unauthorized';
import { ServiceMember } from '../member.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;

let fakeHashProvider: IHashProvider;
let fakeStorageProvider: IStorageProvider;

let serviceMember: ServiceMember;

describe('Delete Member  - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();

    fakeHashProvider = new FakeHashProvider();
    fakeStorageProvider = new FakeStorageProvider();

    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProvider,
      fakeStorageProvider,
    );
  });

  describe('successful cases', () => {
    it('should delete the member when member id exist and member logged in is ADMINISTRATOR', async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const memberToDelete = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      await serviceMember.removeById({
        idMemberLogged: memberLoggedIn.id,
        idMemberToDelete: memberToDelete.id,
      });

      const memberDeleted = await fakeRepositoryMember.findById(
        memberToDelete.id,
      );

      expect(memberDeleted).toBe(undefined);
    });

    it('should delete the member when member id exist and member logged in is ADVISOR', async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADVISOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const memberToDelete = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      await serviceMember.removeById({
        idMemberLogged: memberLoggedIn.id,
        idMemberToDelete: memberToDelete.id,
      });

      const memberDeleted = await fakeRepositoryMember.findById(
        memberToDelete.id,
      );

      expect(memberDeleted).toBe(undefined);
    });

    it('should delete the member when member id exist and member logged in is COORDINATOR', async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'COORDINATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const memberToDelete = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      await serviceMember.removeById({
        idMemberLogged: memberLoggedIn.id,
        idMemberToDelete: memberToDelete.id,
      });

      const memberDeleted = await fakeRepositoryMember.findById(
        memberToDelete.id,
      );

      expect(memberDeleted).toBe(undefined);
    });
  });

  describe('failure cases', () => {
    it('Should return UNAUTHORIZED when not the member logged in exists', async () => {
      const memberToDelete = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      let error;

      try {
        await serviceMember.removeById({
          idMemberLogged: 'No member exist',
          idMemberToDelete: memberToDelete.id,
        });
      } catch (err) {
        error = err;
      }

      const memberNoDeleted = await fakeRepositoryMember.findById(
        memberToDelete.id,
      );

      expect(memberNoDeleted).toBeInstanceOf(EntityMember);
      expect(error).toBeInstanceOf(UnauthorizedException);
      expect(error.response.message).toStrictEqual([
        ERRORS_UNAUTHORIZED.YOU_NEED_TO_BE_LOGGED_IN,
      ]);
    });

    it('Should return FORBIDDEN when the member that is logged in is different from: ADMINISTRATOR; ADVISOR; COORDINATOR', async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'Patent without permission',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const memberToDelete = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      let error;

      try {
        await serviceMember.removeById({
          idMemberLogged: memberLoggedIn.id,
          idMemberToDelete: memberToDelete.id,
        });
      } catch (err) {
        error = err;
      }

      const memberNoDeleted = await fakeRepositoryMember.findById(
        memberToDelete.id,
      );

      expect(memberNoDeleted).toBeInstanceOf(EntityMember);
      expect(error).toBeInstanceOf(ForbiddenException);
      expect(error.response.message).toStrictEqual([
        ERRORS_FORBIDDEN.PATENT_DONT_HAVE_PERMISSION_FOR_DELETE_MEMBER,
      ]);
    });
  });
});

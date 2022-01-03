import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceMember } from '../member.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;

let fakeHashProvider: IHashProvider;
let iStorageProver: IStorageProvider;

let serviceMember: ServiceMember;

describe("Update Member's patent  - SERVICES", () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeHashProvider = new FakeHashProvider();
    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProvider,
      iStorageProver,
    );
  });

  describe('successful cases', () => {
    it("Should update the member's patent when member id exist, patent id exists and member logged in is ADMINISTRATOR", async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const memberToUpdate = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        login: "Member's login to update",
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newMemberPatent = await fakeRepositoryPatent.createSave({
        name: "Member's new patent",
      });

      const memberUpdated = await serviceMember.updatePatentMember({
        idMemberLogged: memberLoggedIn.id,
        updatedMemberLogin: memberToUpdate.login,
        newPatentId: newMemberPatent.id,
      });

      expect(memberUpdated).toBeInstanceOf(EntityMember);
      expect(memberUpdated.id).toBe(memberToUpdate.id);
      expect(memberUpdated.patent).toMatchObject(newMemberPatent);
    });

    it("Should update the member's patent when member id exist, patent id exists and member logged in is ADVISOR", async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADVISOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const memberToUpdate = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        login: "Member's login to update",
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newMemberPatent = await fakeRepositoryPatent.createSave({
        name: "Member's new patent",
      });

      const memberUpdated = await serviceMember.updatePatentMember({
        idMemberLogged: memberLoggedIn.id,
        updatedMemberLogin: memberToUpdate.login,
        newPatentId: newMemberPatent.id,
      });

      expect(memberUpdated).toBeInstanceOf(EntityMember);
      expect(memberUpdated.id).toBe(memberToUpdate.id);
      expect(memberUpdated.patent).toMatchObject(newMemberPatent);
    });

    it("Should update the member's patent when member id exist, patent id exists and member logged in is COORDINATOR", async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'COORDINATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const memberToUpdate = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        login: "Member's login to update",
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newMemberPatent = await fakeRepositoryPatent.createSave({
        name: "Member's new patent",
      });

      const memberUpdated = await serviceMember.updatePatentMember({
        idMemberLogged: memberLoggedIn.id,
        updatedMemberLogin: memberToUpdate.login,
        newPatentId: newMemberPatent.id,
      });

      expect(memberUpdated).toBeInstanceOf(EntityMember);
      expect(memberUpdated.id).toBe(memberToUpdate.id);
      expect(memberUpdated.patent).toMatchObject(newMemberPatent);
    });
  });

  describe('failure cases', () => {
    it('Should return UNAUTHORIZED when not the member logged in exists', async () => {
      const memberToUpdate = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        login: "Member's login to update",
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newMemberPatent = await fakeRepositoryPatent.createSave({
        name: "Member's new patent",
      });

      let error;
      let memberUpdated = undefined;

      try {
        memberUpdated = await serviceMember.updatePatentMember({
          idMemberLogged: "id member doesn't exists",
          updatedMemberLogin: memberToUpdate.login,
          newPatentId: newMemberPatent.id,
        });
      } catch (err) {
        error = err;
      }

      const memberThatShouldHaveBeenUpdated = await fakeRepositoryMember.findByLogin(
        memberToUpdate.login,
      );

      expect(memberUpdated).toBe(undefined);
      expect(memberToUpdate).toMatchObject(memberThatShouldHaveBeenUpdated);
      expect(error).toBeInstanceOf(UnauthorizedException);
      expect(error.response.message).toStrictEqual([
        `It should be logged in with a valid member`,
      ]);
    });

    it('Should return FORBIDDEN when the member that is logged in is different from: ADMINISTRATOR; ADVISOR; COORDINATOR', async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'Patent without permission',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const memberToUpdate = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        login: "Member's login to update",
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newMemberPatent = await fakeRepositoryPatent.createSave({
        name: "Member's new patent",
      });

      let error;
      let memberUpdated = undefined;

      try {
        memberUpdated = await serviceMember.updatePatentMember({
          idMemberLogged: memberLoggedIn.id,
          updatedMemberLogin: memberToUpdate.login,
          newPatentId: newMemberPatent.id,
        });
      } catch (err) {
        error = err;
      }

      const memberThatShouldHaveBeenUpdated = await fakeRepositoryMember.findByLogin(
        memberToUpdate.login,
      );

      expect(memberUpdated).toBe(undefined);
      expect(memberToUpdate).toMatchObject(memberThatShouldHaveBeenUpdated);
      expect(error).toBeInstanceOf(ForbiddenException);
      expect(error.response.message).toStrictEqual([
        `Your patent don't have permission for updating patent of the member`,
      ]);
    });

    it("Should return NOT_FOUNT when the member that will be update doesn't exists", async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newMemberPatent = await fakeRepositoryPatent.createSave({
        name: "Member's new patent",
      });

      let error;
      let memberUpdated = undefined;
      const updatedMemberLogin = "Member's login to update doesn't exists";

      try {
        memberUpdated = await serviceMember.updatePatentMember({
          idMemberLogged: memberLoggedIn.id,
          updatedMemberLogin,
          newPatentId: newMemberPatent.id,
        });
      } catch (err) {
        error = err;
      }

      expect(memberUpdated).toBe(undefined);
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.response.message).toStrictEqual([
        `Not found member with login "${updatedMemberLogin}"`,
      ]);
    });

    it("Should return BAD_REQUEST when the patent's id doesn't exists", async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const memberToUpdate = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        login: "Member's login to update",
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      let error;
      let memberUpdated = undefined;
      const newPatentId = "id patent doesn't exists";

      try {
        memberUpdated = await serviceMember.updatePatentMember({
          idMemberLogged: memberLoggedIn.id,
          updatedMemberLogin: memberToUpdate.login,
          newPatentId,
        });
      } catch (err) {
        error = err;
      }

      const memberThatShouldHaveBeenUpdated = await fakeRepositoryMember.findByLogin(
        memberToUpdate.login,
      );

      expect(memberUpdated).toBe(undefined);
      expect(memberToUpdate).toMatchObject(memberThatShouldHaveBeenUpdated);
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.response.message).toStrictEqual([
        `Not found patent with id "${newPatentId}"`,
      ]);
    });
  });
});

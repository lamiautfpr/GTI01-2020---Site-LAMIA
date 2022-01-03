import { IUpdateMemberBasicDataDTO } from '@modules/members/dtos/IUpdateMember.dto';
import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import {
  BadRequestException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import FakeStorageProvider from '@providers/StorageProvider/implementations/fakes/FakeStorage.provider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceMember } from '../member.service';

jest.mock('@providers/HashProvider/implementations/fakes/FakeHashProvider');

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;

const FakeHashProviderMock = FakeHashProvider as jest.Mock<FakeHashProvider>;

let fakeHashProviderMock: jest.Mocked<IHashProvider>;
let fakeStorageProvider: IStorageProvider;

let serviceMember: ServiceMember;

describe('Update Member  - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();

    fakeHashProviderMock = new FakeHashProviderMock() as jest.Mocked<FakeHashProvider>;
    fakeStorageProvider = new FakeStorageProvider();

    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProviderMock,
      fakeStorageProvider,
    );
  });

  describe('successful cases', () => {
    it('should update a member when basic datas is valid and the member logged in exists', async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newMemberData: IUpdateMemberBasicDataDTO = {
        name: 'Name updated',
        email: 'email.updated@mock.test',
        login: 'login.updated',
        linkedin: 'linkedin updated',
        gitHub: 'gitHub updated',
        lattes: 'lattes updated',
        quoteName: 'quoteName updated',
        description: 'description updated',
      };

      const memberUpdated = await serviceMember.updateMember({
        newMemberData,
        idMember: memberLoggedIn.id,
      });

      expect(memberUpdated).toBeInstanceOf(EntityMember);
      expect(memberUpdated.id).toBe(memberLoggedIn.id);
      expect(memberUpdated.name).toBe(newMemberData.name);
      expect(memberUpdated.email).toBe(newMemberData.email);
      expect(memberUpdated.login).toBe(newMemberData.login);
      expect(memberUpdated.linkedin).toBe(newMemberData.linkedin);
      expect(memberUpdated.gitHub).toBe(newMemberData.gitHub);
      expect(memberUpdated.lattes).toBe(newMemberData.lattes);
      expect(memberUpdated.quoteName).toBe(newMemberData.quoteName);
      expect(memberUpdated.description).toBe(newMemberData.description);

      expect(fakeHashProviderMock.generateHash).toHaveBeenCalledTimes(0);
      expect(fakeHashProviderMock.compareHash).toHaveBeenCalledTimes(0);
    });

    it("should update a member's password when oldPassword, newPassword are informed and oldPassword is valid", async () => {
      fakeHashProviderMock.compareHash.mockResolvedValueOnce(true);

      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        password: 'old password',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newMemberData: IUpdateMemberBasicDataDTO = {
        name: memberLoggedIn.name,
        email: memberLoggedIn.email,
        login: memberLoggedIn.login,
        linkedin: memberLoggedIn.linkedin,
        gitHub: memberLoggedIn.gitHub,
        lattes: memberLoggedIn.lattes,
        quoteName: memberLoggedIn.quoteName,
        description: memberLoggedIn.description,
        oldPassword: 'old password',
        newPassword: 'new password',
      };

      const memberUpdated = await serviceMember.updateMember({
        newMemberData,
        idMember: memberLoggedIn.id,
      });

      // console.log(memberUpdated.password, ' === ', memberLoggedIn.password);

      expect(memberUpdated).toBeInstanceOf(EntityMember);
      expect(memberUpdated.id).toBe(memberLoggedIn.id);
      expect(memberUpdated.name).toBe(memberLoggedIn.name);
      expect(memberUpdated.email).toBe(memberLoggedIn.email);
      expect(memberUpdated.login).toBe(memberLoggedIn.login);
      expect(memberUpdated.linkedin).toBe(memberLoggedIn.linkedin);
      expect(memberUpdated.gitHub).toBe(memberLoggedIn.gitHub);
      expect(memberUpdated.lattes).toBe(memberLoggedIn.lattes);
      expect(memberUpdated.quoteName).toBe(memberLoggedIn.quoteName);
      expect(memberUpdated.description).toBe(memberLoggedIn.description);

      expect(fakeHashProviderMock.compareHash).toHaveBeenCalledTimes(1);
      expect(fakeHashProviderMock.generateHash).toHaveBeenCalledTimes(1);
    });
  });

  describe('failure cases', () => {
    it('Should return UNAUTHORIZED when not the member logged in exists', async () => {
      const newMemberData: IUpdateMemberBasicDataDTO = {
        name: 'Name updated',
        email: 'email.updated@mock.test',
        login: 'login.updated',
        linkedin: 'linkedin updated',
        gitHub: 'gitHub updated',
        lattes: 'lattes updated',
        quoteName: 'quoteName updated',
        description: 'description updated',
      };

      let error;
      let memberNoUpdated = undefined;

      try {
        memberNoUpdated = await serviceMember.updateMember({
          newMemberData,
          idMember: "id member doesn't exists",
        });
      } catch (err) {
        error = err;
      }

      expect(memberNoUpdated).toBe(undefined);
      expect(error).toBeInstanceOf(UnauthorizedException);
      expect(error.response.message).toStrictEqual([
        `It should be logged in with a valid member`,
      ]);

      expect(fakeHashProviderMock.generateHash).toHaveBeenCalledTimes(0);
      expect(fakeHashProviderMock.compareHash).toHaveBeenCalledTimes(0);
    });

    it('Should return CONFLICT when the unique datas already exists in another member', async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const conflictDatas = {
        email: 'conflic.mail@test.com',
        login: 'conflict login',
        linkedin: 'conflict linkedin',
        lattes: 'conflict lattes',
        gitHub: 'conflict gitHub',
        quoteName: 'conflict quoteName',
      };

      const memberToConflict = await MembersMock.giveAMeAValidMember({
        patentName: 'Any patent',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      Object.assign(memberToConflict, conflictDatas);

      await fakeRepositoryMember.updateSave(memberToConflict);

      const newMemberData: IUpdateMemberBasicDataDTO = {
        name: 'Name updated',
        description: 'description updated',
        ...conflictDatas,
      };

      let error;
      let membersNoUpdated = undefined;
      try {
        membersNoUpdated = await serviceMember.updateMember({
          idMember: memberLoggedIn.id,
          newMemberData,
        });
      } catch (err) {
        error = err;
      }

      const memberThatShouldHaveBeenUpdated = await fakeRepositoryMember.findByLogin(
        memberLoggedIn.login,
      );

      expect(membersNoUpdated).toBe(undefined);

      expect(memberThatShouldHaveBeenUpdated.id).toBe(memberLoggedIn.id);
      expect(memberThatShouldHaveBeenUpdated.name).toBe(memberLoggedIn.name);
      expect(memberThatShouldHaveBeenUpdated.email).toBe(memberLoggedIn.email);
      expect(memberThatShouldHaveBeenUpdated.login).toBe(memberLoggedIn.login);
      expect(memberThatShouldHaveBeenUpdated.linkedin).toBe(
        memberLoggedIn.linkedin,
      );
      expect(memberThatShouldHaveBeenUpdated.gitHub).toBe(
        memberLoggedIn.gitHub,
      );
      expect(memberThatShouldHaveBeenUpdated.lattes).toBe(
        memberLoggedIn.lattes,
      );
      expect(memberThatShouldHaveBeenUpdated.quoteName).toBe(
        memberLoggedIn.quoteName,
      );
      expect(memberThatShouldHaveBeenUpdated.description).toBe(
        memberLoggedIn.description,
      );

      expect(error).toBeInstanceOf(ConflictException);
      expect(error.response.message).toStrictEqual([
        `The email "${conflictDatas.email}" already exists`,
        `The login "${conflictDatas.login}" already exists`,
        `The linkedin "${conflictDatas.linkedin}" already exists`,
        `The lattes "${conflictDatas.lattes}" already exists`,
        `The gitHub "${conflictDatas.gitHub}" already exists`,
        `The quoteName "${conflictDatas.quoteName}" already exists`,
      ]);
      expect(fakeHashProviderMock.compareHash).toHaveBeenCalledTimes(0);
      expect(fakeHashProviderMock.generateHash).toHaveBeenCalledTimes(0);
    });

    it("Should return BAD_REQUEST when oldPassword isn't macthing member's current password", async () => {
      fakeHashProviderMock.compareHash.mockResolvedValueOnce(false);

      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        password: 'old password',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newMemberData: IUpdateMemberBasicDataDTO = {
        name: memberLoggedIn.name,
        email: memberLoggedIn.email,
        login: memberLoggedIn.login,
        linkedin: memberLoggedIn.linkedin,
        gitHub: memberLoggedIn.gitHub,
        lattes: memberLoggedIn.lattes,
        quoteName: memberLoggedIn.quoteName,
        description: memberLoggedIn.description,
        oldPassword: 'Invalid old password',
        newPassword: 'new password',
      };

      let error;
      let membersNoUpdated = undefined;

      try {
        membersNoUpdated = await serviceMember.updateMember({
          idMember: memberLoggedIn.id,
          newMemberData,
        });
      } catch (err) {
        error = err;
      }

      const memberThatShouldHaveBeenUpdated = await fakeRepositoryMember.findByLogin(
        memberLoggedIn.login,
      );

      expect(membersNoUpdated).toBe(undefined);

      expect(memberThatShouldHaveBeenUpdated.id).toBe(memberLoggedIn.id);
      expect(memberThatShouldHaveBeenUpdated.name).toBe(memberLoggedIn.name);
      expect(memberThatShouldHaveBeenUpdated.email).toBe(memberLoggedIn.email);
      expect(memberThatShouldHaveBeenUpdated.login).toBe(memberLoggedIn.login);
      expect(memberThatShouldHaveBeenUpdated.linkedin).toBe(
        memberLoggedIn.linkedin,
      );
      expect(memberThatShouldHaveBeenUpdated.gitHub).toBe(
        memberLoggedIn.gitHub,
      );
      expect(memberThatShouldHaveBeenUpdated.lattes).toBe(
        memberLoggedIn.lattes,
      );
      expect(memberThatShouldHaveBeenUpdated.quoteName).toBe(
        memberLoggedIn.quoteName,
      );
      expect(memberThatShouldHaveBeenUpdated.description).toBe(
        memberLoggedIn.description,
      );

      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.response.message).toStrictEqual(['Invalid Old password']);

      expect(fakeHashProviderMock.compareHash).toHaveBeenCalledTimes(1);
      expect(fakeHashProviderMock.generateHash).toHaveBeenCalledTimes(0);
    });
  });
});

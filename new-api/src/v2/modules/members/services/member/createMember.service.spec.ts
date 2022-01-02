import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceMember } from '../member.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;

let fakeHashProvider: IHashProvider;
let fakeStorageProver: IStorageProvider;

let serviceMember: ServiceMember;

describe('Create Member  - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeHashProvider = new FakeHashProvider();
    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProvider,
      fakeStorageProver,
    );
  });

  describe('successful cases', () => {
    it('should create a new member when basic datas is valid and the member logged in is ADMINISTRATOR', async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const validPatentMocked = await fakeRepositoryPatent.createSave({
        name: 'Patent Mocked',
      });

      const data = {
        email: 'john_doe@mock.test',
        name: 'John Doe',
        patentId: validPatentMocked.id,
      };

      const memberCreated = await serviceMember.createMember({
        ...data,
        idMemberLogged: memberLoggedIn.id,
      });

      expect(memberCreated).toBeInstanceOf(EntityMember);
      expect(memberCreated.id).toBeDefined();
      expect(memberCreated.email).toBe(data.email);
      expect(memberCreated.name).toBe(data.name);
      expect(memberCreated.login).toBe(data.email.split('@')[0]);
      expect(memberCreated.patent.name).toBe(validPatentMocked.name);
    });

    it('should create a new member when basic datas is valid and the member logged in is ADVISOR', async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADVISOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const validPatentMocked = await fakeRepositoryPatent.createSave({
        name: 'Patent Mocked',
      });

      const data = {
        email: 'john_doe@mock.test',
        name: 'John Doe',
        patentId: validPatentMocked.id,
      };

      const memberCreated = await serviceMember.createMember({
        ...data,
        idMemberLogged: memberLoggedIn.id,
      });

      expect(memberCreated).toBeInstanceOf(EntityMember);
      expect(memberCreated.id).toBeDefined();
      expect(memberCreated.email).toBe(data.email);
      expect(memberCreated.name).toBe(data.name);
      expect(memberCreated.login).toBe(data.email.split('@')[0]);
      expect(memberCreated.patent.name).toBe(validPatentMocked.name);
    });

    it('should create a new member when basic datas is valid and the member logged in is COORDINATOR', async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'COORDINATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const validPatentMocked = await fakeRepositoryPatent.createSave({
        name: 'Patent Mocked',
      });

      const data = {
        email: 'john_doe@mock.test',
        name: 'John Doe',
        patentId: validPatentMocked.id,
      };

      const memberCreated = await serviceMember.createMember({
        ...data,
        idMemberLogged: memberLoggedIn.id,
      });

      expect(memberCreated).toBeInstanceOf(EntityMember);
      expect(memberCreated.id).toBeDefined();
      expect(memberCreated.email).toBe(data.email);
      expect(memberCreated.name).toBe(data.name);
      expect(memberCreated.login).toBe(data.email.split('@')[0]);
      expect(memberCreated.patent.name).toBe(validPatentMocked.name);
    });

    it('should create a new member when basic datas is valid but the email prefix already exists and the member logged in is ADMINISTRATOR', async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      await MembersMock.giveAMeAValidMember({
        patentName: 'Any Patent',
        login: 'john_doe',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const validPatentMocked = await fakeRepositoryPatent.createSave({
        name: 'Patent Mocked',
      });

      const data = {
        email: 'john_doe@mock.test',
        name: 'John Doe',
        patentId: validPatentMocked.id,
      };

      const memberCreated = await serviceMember.createMember({
        ...data,
        idMemberLogged: memberLoggedIn.id,
      });

      expect(memberCreated).toBeInstanceOf(EntityMember);
      expect(memberCreated.id).toBeDefined();
      expect(memberCreated.email).toBe(data.email);
      expect(memberCreated.name).toBe(data.name);
      expect(memberCreated.login).toBe(`${data.email.split('@')[0]}_1`);
      expect(memberCreated.patent.name).toBe(validPatentMocked.name);
    });
  });

  describe('failure cases', () => {
    it('Should return UNAUTHORIZED when not the member logged in exists', async () => {
      const validPatentMocked = await fakeRepositoryPatent.createSave({
        name: 'Patent Mocked',
      });

      const data = {
        email: 'john_doe@mock.test',
        name: 'John Doe',
        patentId: validPatentMocked.id,
      };

      let error;
      let membersNoCreated = undefined;

      try {
        membersNoCreated = await serviceMember.createMember({
          ...data,
          idMemberLogged: "id member doesn't exists",
        });
      } catch (err) {
        error = err;
      }

      expect(membersNoCreated).toBe(undefined);
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

      const validPatentMocked = await fakeRepositoryPatent.createSave({
        name: 'Patent Mocked',
      });

      const data = {
        email: 'john_doe@mock.test',
        name: 'John Doe',
        patentId: validPatentMocked.id,
      };

      let error;
      let membersNoCreated = undefined;
      try {
        membersNoCreated = await serviceMember.createMember({
          ...data,
          idMemberLogged: memberLoggedIn.id,
        });
      } catch (err) {
        error = err;
      }

      expect(membersNoCreated).toBe(undefined);
      expect(error).toBeInstanceOf(ForbiddenException);
      expect(error.response.message).toStrictEqual([
        `Your patent don't have permission for creating a new member`,
      ]);
    });

    it("Should return CONFLICT when the member's mail already exists", async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const email = 'conflic.mail@test.com';

      await MembersMock.giveAMeAValidMember({
        patentName: 'Any Patent',
        email,
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const validPatentMocked = await fakeRepositoryPatent.createSave({
        name: 'Patent Mocked',
      });

      const data = {
        email,
        name: 'John Doe',
        patentId: validPatentMocked.id,
      };

      let error;
      let membersNoCreated = undefined;
      try {
        membersNoCreated = await serviceMember.createMember({
          ...data,
          idMemberLogged: memberLoggedIn.id,
        });
      } catch (err) {
        error = err;
      }

      expect(membersNoCreated).toBe(undefined);
      expect(error).toBeInstanceOf(ConflictException);
      expect(error.response.message).toStrictEqual([
        `The email "${email}" already exists`,
      ]);
    });

    it("Should return BAD_REQUEST when the patent's id doesn't exist", async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const patentId = "id patent doesn't exists";

      const data = {
        email: 'john_doe@mock.test',
        name: 'John Doe',
        patentId,
      };

      let error;
      let membersNoCreated = undefined;
      try {
        membersNoCreated = await serviceMember.createMember({
          ...data,
          idMemberLogged: memberLoggedIn.id,
        });
      } catch (err) {
        error = err;
      }

      expect(membersNoCreated).toBe(undefined);
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.response.message).toStrictEqual([
        `Not found patent with id "${patentId}"`,
      ]);
    });
  });
});

import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { ServiceMember } from '@modules/members/services/member.service';
import { FakeRepositoryType } from '@modules/works/repositories/fakes/Type.fakeRepository';
import {
  ConflictException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import FakeStorageProvider from '@providers/StorageProvider/implementations/fakes/FakeStorage.provider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceType } from '../type.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;
let fakeRepositoryType: FakeRepositoryType;

let fakeHashProvider: IHashProvider;
let fakeStorageProvider: IStorageProvider;

let serviceMember: ServiceMember;
let serviceType: ServiceType;

describe('Create Type - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeRepositoryType = new FakeRepositoryType();

    fakeHashProvider = new FakeHashProvider();
    fakeStorageProvider = new FakeStorageProvider();

    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProvider,
      fakeStorageProvider,
    );

    serviceType = new ServiceType(fakeRepositoryType, serviceMember);
  });

  describe('successful cases', () => {
    it("should create a new type successfully when there is full datas and member's patent is ADMINISTRATOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newTypeData = {
        name: 'Type Mock',
        description: 'this is description',
      };

      const result = await serviceType.createType({
        newTypeData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe(newTypeData.name);
    });

    it("should create new a type successfully when there is full datas and member's patent is COORDINATOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'COORDINATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newTypeData = {
        name: 'Type Mock',
        description: 'this is description',
      };

      const result = await serviceType.createType({
        newTypeData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe(newTypeData.name);
    });

    it("should create new a type successfully when there is full datas and member's patent is ADVISOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADVISOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newTypeData = {
        name: 'Type Mock',
        description: 'this is description',
      };

      const result = await serviceType.createType({
        newTypeData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe(newTypeData.name);
    });

    it("should create new a type successfully when there not is description and member's patent is ADMINISTRATOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newTypeData = {
        name: 'Type Mock',
      };

      const result = await serviceType.createType({
        newTypeData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe(newTypeData.name);
    });

    it("should create new a type successfully when there not is description and member's patent is COORDINATOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'COORDINATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newTypeData = {
        name: 'Type Mock',
      };

      const result = await serviceType.createType({
        newTypeData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe(newTypeData.name);
    });

    it("should create new a type successfully when there not is description and member's patent is ADVISOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADVISOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newTypeData = {
        name: 'Type Mock',
      };

      const result = await serviceType.createType({
        newTypeData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe(newTypeData.name);
    });
  });
  describe('failure cases', () => {
    it('should not create new a type when memberId not exists', async () => {
      await expect(
        serviceType.createType({
          newTypeData: {
            name: 'Type Mock',
          },
          idMember: 'not exists member',
        }),
      ).rejects.toBeInstanceOf(UnauthorizedException);
    });

    it("should not create new a type when member's patent hasn't permission", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'Patent without permission',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      await expect(
        serviceType.createType({
          newTypeData: {
            name: 'Type Mock',
          },
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
    });

    it('should not create new a type when already exists one with the same name and without description', async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });
      const newTypeData = {
        name: 'Type Mock',
      };
      await fakeRepositoryType.createSave(newTypeData);
      await expect(
        serviceType.createType({
          newTypeData,
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('should not create new a type when already exists one with the same name', async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newTypeData = {
        name: 'Type Mock',
        description: 'this is a description',
      };
      await fakeRepositoryType.createSave(newTypeData);
      await expect(
        serviceType.createType({
          newTypeData,
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });
  });
});

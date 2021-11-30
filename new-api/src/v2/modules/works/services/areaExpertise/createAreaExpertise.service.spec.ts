import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { ServiceMember } from '@modules/members/services/member.service';
import { FakeRepositoryAreaExpertise } from '@modules/works/repositories/fakes/AreaExpertise.fakeRepository';
import {
  ConflictException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceAreaExpertise } from '../areaExpertise.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;
let fakeRepositoryExpertiseArea: FakeRepositoryAreaExpertise;

let iHashProvider: IHashProvider;
let iStorageProver: IStorageProvider;

let serviceMember: ServiceMember;
let serviceExpertiseArea: ServiceAreaExpertise;

describe('Create ExpertiseArea - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeRepositoryExpertiseArea = new FakeRepositoryAreaExpertise();
    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      iHashProvider,
      iStorageProver,
    );

    serviceExpertiseArea = new ServiceAreaExpertise(
      fakeRepositoryExpertiseArea,
      serviceMember,
    );
  });

  describe('successful cases', () => {
    it("should create a new expertise area successfully when there is full datas and member's patent is ADMINISTRATOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newExpertiseAreaData = {
        name: 'ExpertiseArea Mock',
        description: 'this is description',
      };

      const result = await serviceExpertiseArea.createAreaExpertise({
        newExpertiseAreaData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe(newExpertiseAreaData.name);
    });

    it("should create a new expertise area successfully when there is full datas and member's patent is COORDINATOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'COORDINATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newExpertiseAreaData = {
        name: 'ExpertiseArea Mock',
        description: 'this is description',
      };

      const result = await serviceExpertiseArea.createAreaExpertise({
        newExpertiseAreaData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe(newExpertiseAreaData.name);
    });

    it("should create a new expertise area successfully when there is full datas and member's patent is ADVISOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADVISOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newExpertiseAreaData = {
        name: 'ExpertiseArea Mock',
        description: 'this is description',
      };

      const result = await serviceExpertiseArea.createAreaExpertise({
        newExpertiseAreaData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe(newExpertiseAreaData.name);
    });

    it("should create a new expertise area successfully when there not is description and member's patent is ADMINISTRATOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newExpertiseAreaData = {
        name: 'ExpertiseArea Mock',
      };

      const result = await serviceExpertiseArea.createAreaExpertise({
        newExpertiseAreaData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe(newExpertiseAreaData.name);
    });

    it("should create a new expertise area successfully when there not is description and member's patent is COORDINATOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'COORDINATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newExpertiseAreaData = {
        name: 'ExpertiseArea Mock',
      };

      const result = await serviceExpertiseArea.createAreaExpertise({
        newExpertiseAreaData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe(newExpertiseAreaData.name);
    });

    it("should create a new expertise area successfully when there not is description and member's patent is ADVISOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADVISOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newExpertiseAreaData = {
        name: 'ExpertiseArea Mock',
      };

      const result = await serviceExpertiseArea.createAreaExpertise({
        newExpertiseAreaData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe(newExpertiseAreaData.name);
    });
  });
  describe('failure cases', () => {
    it('should not create a new expertise area when memberId not exists', async () => {
      await expect(
        serviceExpertiseArea.createAreaExpertise({
          newExpertiseAreaData: {
            name: 'ExpertiseArea Mock',
          },
          idMember: 'not exists member',
        }),
      ).rejects.toBeInstanceOf(UnauthorizedException);
    });

    it("should not create a new expertise area when member's patent hasn't permission", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'Patent without permission',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      await expect(
        serviceExpertiseArea.createAreaExpertise({
          newExpertiseAreaData: {
            name: 'ExpertiseArea Mock',
          },
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
    });

    it('should not create a new expertise area when already exists one with the same name and without description', async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });
      const newExpertiseAreaData = {
        name: 'ExpertiseArea Mock',
      };
      await fakeRepositoryExpertiseArea.createSave(newExpertiseAreaData);
      await expect(
        serviceExpertiseArea.createAreaExpertise({
          newExpertiseAreaData,
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('should not create a new expertise area when already exists one with the same name', async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newExpertiseAreaData = {
        name: 'ExpertiseArea Mock',
        description: 'this is a description',
      };
      await fakeRepositoryExpertiseArea.createSave(newExpertiseAreaData);
      await expect(
        serviceExpertiseArea.createAreaExpertise({
          newExpertiseAreaData,
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });
  });
});

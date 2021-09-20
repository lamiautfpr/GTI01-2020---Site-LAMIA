import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import {
  ConflictException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { ServicePatent } from '../patent.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;
let servicePatent: ServicePatent;

describe('Create Patient - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();
    servicePatent = new ServicePatent(
      fakeRepositoryPatent,
      fakeRepositoryMember,
    );
  });

  const createMemberMock = async (
    patentName: string,
  ): Promise<EntityMember> => {
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
  };

  describe('successful cases', () => {
    it("should create a patent successfully when there is full datas and member's patent is ADMINISTRATOR", async () => {
      const member = await createMemberMock('ADMINISTRATOR');

      const newPatentData = {
        name: 'Patent MocK',
        description: 'this is description',
      };

      const result = await servicePatent.createPatent({
        newPatentData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe(newPatentData.name);
    });

    it("should create a patent successfully when there is full datas and member's patent is COORDINATOR", async () => {
      const member = await createMemberMock('COORDINATOR');

      const newPatentData = {
        name: 'Patent MocK',
        description: 'this is description',
      };

      const result = await servicePatent.createPatent({
        newPatentData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe(newPatentData.name);
    });

    it("should create a patent successfully when there not is description and member's patent is ADMINISTRATOR", async () => {
      const member = await createMemberMock('ADMINISTRATOR');

      const newPatentData = {
        name: 'Patent MocK',
      };

      const result = await servicePatent.createPatent({
        newPatentData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe(newPatentData.name);
    });

    it("should create a patent successfully when there not is description and member's patent is COORDINATOR", async () => {
      const member = await createMemberMock('COORDINATOR');

      const newPatentData = {
        name: 'Patent MocK',
      };

      const result = await servicePatent.createPatent({
        newPatentData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe(newPatentData.name);
    });
  });
  describe('failure cases', () => {
    it('should not create a patent when memberId not exists', async () => {
      await expect(
        servicePatent.createPatent({
          newPatentData: {
            name: 'Patent MocK',
          },
          idMember: 'not exists member',
        }),
      ).rejects.toBeInstanceOf(UnauthorizedException);
    });
    it("should not create a patent when member's patent hasn't permission", async () => {
      const member = await createMemberMock('Patent without permission');

      await expect(
        servicePatent.createPatent({
          newPatentData: {
            name: 'Patent MocK',
          },
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
    });

    it('should not create a patent when already exists one with the same name and without description', async () => {
      const member = await createMemberMock('ADMINISTRATOR');

      const newPatentData = {
        name: 'Patent MocK',
      };

      await fakeRepositoryPatent.createSave(newPatentData);

      await expect(
        servicePatent.createPatent({
          newPatentData,
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('should not create a patent when already exists one with the same name', async () => {
      const member = await createMemberMock('ADMINISTRATOR');

      const newPatentData = {
        name: 'Patent MocK',
        description: 'this is a description',
      };

      await fakeRepositoryPatent.createSave(newPatentData);

      await expect(
        servicePatent.createPatent({
          newPatentData,
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });
  });
});

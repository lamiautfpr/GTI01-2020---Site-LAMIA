import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { ServiceMember } from '@modules/members/services/member.service';
import { FakeRepositoryCategory } from '@modules/works/repositories/fakes/Category.fakeRepository';
import {
  ConflictException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceCategory } from '../category.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;
let fakeRepositoryCategory: FakeRepositoryCategory;

let fakeHashProvider: IHashProvider;
let iStorageProver: IStorageProvider;

let serviceMember: ServiceMember;
let serviceCategory: ServiceCategory;

describe('Create Category - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeHashProvider = new FakeHashProvider();
    fakeRepositoryCategory = new FakeRepositoryCategory();
    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProvider,
      iStorageProver,
    );

    serviceCategory = new ServiceCategory(
      fakeRepositoryCategory,
      serviceMember,
    );
  });

  describe('successful cases', () => {
    it("should create a new category successfully when there is full datas and member's patent is ADMINISTRATOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newCategoryData = {
        name: 'Category Mock',
        description: 'this is description',
      };

      const result = await serviceCategory.createCategory({
        newCategoryData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe(newCategoryData.name);
    });

    it("should create a new category successfully when there is full datas and member's patent is COORDINATOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'COORDINATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newCategoryData = {
        name: 'Category Mock',
        description: 'this is description',
      };

      const result = await serviceCategory.createCategory({
        newCategoryData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe(newCategoryData.name);
    });

    it("should create a new category successfully when there is full datas and member's patent is ADVISOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADVISOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newCategoryData = {
        name: 'Category Mock',
        description: 'this is description',
      };

      const result = await serviceCategory.createCategory({
        newCategoryData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe(newCategoryData.name);
    });

    it("should create a new category successfully when there not is description and member's patent is ADMINISTRATOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newCategoryData = {
        name: 'Category Mock',
      };

      const result = await serviceCategory.createCategory({
        newCategoryData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe(newCategoryData.name);
    });

    it("should create a new category successfully when there not is description and member's patent is COORDINATOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'COORDINATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newCategoryData = {
        name: 'Category Mock',
      };

      const result = await serviceCategory.createCategory({
        newCategoryData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe(newCategoryData.name);
    });

    it("should create a new category successfully when there not is description and member's patent is ADVISOR", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADVISOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newCategoryData = {
        name: 'Category Mock',
      };

      const result = await serviceCategory.createCategory({
        newCategoryData,
        idMember: member.id,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe(newCategoryData.name);
    });
  });
  describe('failure cases', () => {
    it('should not create a new category when memberId not exists', async () => {
      await expect(
        serviceCategory.createCategory({
          newCategoryData: {
            name: 'Category Mock',
          },
          idMember: 'not exists member',
        }),
      ).rejects.toBeInstanceOf(UnauthorizedException);
    });

    it("should not create a new category when member's patent hasn't permission", async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'Patent without permission',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      await expect(
        serviceCategory.createCategory({
          newCategoryData: {
            name: 'Category Mock',
          },
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
    });

    it('should not create a new category when already exists one with the same name and without description', async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });
      const newCategoryData = {
        name: 'Category Mock',
      };
      await fakeRepositoryCategory.createSave(newCategoryData);
      await expect(
        serviceCategory.createCategory({
          newCategoryData,
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('should not create a new category when already exists one with the same name', async () => {
      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const newCategoryData = {
        name: 'Category Mock',
        description: 'this is a description',
      };
      await fakeRepositoryCategory.createSave(newCategoryData);
      await expect(
        serviceCategory.createCategory({
          newCategoryData,
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });
  });
});

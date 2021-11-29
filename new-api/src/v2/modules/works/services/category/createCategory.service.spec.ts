import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { ServiceMember } from '@modules/members/services/member.service';
import { FakeRepositoryCategory } from '@modules/works/repositories/fakes/Category.fakeRepository';
import { EntityCategory } from '@modules/works/typeorm/entities/category.entity';
import { ConflictException } from '@nestjs/common';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceCategory } from '../category.service';

let fakeRepositoryCategory: FakeRepositoryCategory;
let fakeRepositoryMember: FakeRepositoryMember;
let fakeRepositoryPatent: FakeRepositoryPatent;
let serviceCategory: ServiceCategory;
let serviceMember: ServiceMember;
let iHashProvider: IHashProvider;
let iStorageProver: IStorageProvider;

describe('Create Category - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryCategory = new FakeRepositoryCategory();
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeRepositoryPatent = new FakeRepositoryPatent();

    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      iHashProvider,
      iStorageProver,
    );

    serviceCategory = new ServiceCategory(
      fakeRepositoryCategory,
      serviceMember,
    );
  });

  describe('successful cases', () => {
    it('should create an Category successfully when there is full datas', async () => {
      const idMember = '25ff2e6b-a777-41dc-827c-3fb8d6b4dbe7';

      const category = new EntityCategory({
        name: 'Ciência de dados',
        description: 'Ciência de dados é uma area da computação que estuda...',
      });

      const result = await serviceCategory.createCategory({
        category,
        idMember,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe('Category MocK');
    });

    it('should create an Category successfully when there not is description', async () => {
      const idMember = '25ff2e6b-a777-41dc-827c-3fb8d6b4dbe7';

      const category = new EntityCategory({
        name: 'Inteligência Artificial',
      });

      const result = await serviceCategory.createCategory({
        category,
        idMember,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe('Category MocK');
    });
  });
  describe('failure cases', () => {
    it('should not create an Category when already exists one with the same name and without description', async () => {
      const idMember = '25ff2e6b-a777-41dc-827c-3fb8d6b4dbe7';

      const category = new EntityCategory({
        name: 'Ciência de dados',
        description: '',
      });

      expect(
        serviceCategory.createCategory({
          category,
          idMember,
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });
  });
});

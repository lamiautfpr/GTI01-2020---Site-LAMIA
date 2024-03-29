import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { ServiceMember } from '@modules/members/services/member.service';
import { FakeRepositoryCategory } from '@modules/works/repositories/fakes/Category.fakeRepository';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import FakeStorageProvider from '@providers/StorageProvider/implementations/fakes/FakeStorage.provider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import NoContentException from '../../../../utils/Exceptions/NoContent.exception';
import { ServiceCategory } from '../category.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;
let fakeRepositoryCategory: FakeRepositoryCategory;

let fakeHashProvider: IHashProvider;
let fakeStorageProvider: IStorageProvider;

let serviceMember: ServiceMember;
let serviceCategory: ServiceCategory;

describe('Find all Categories - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeRepositoryCategory = new FakeRepositoryCategory();

    fakeHashProvider = new FakeHashProvider();
    fakeStorageProvider = new FakeStorageProvider();

    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProvider,
      fakeStorageProvider,
    );

    serviceCategory = new ServiceCategory(
      fakeRepositoryCategory,
      serviceMember,
    );
  });
  describe('successful cases', () => {
    it('should return a list of categories when categories exist', async () => {
      await fakeRepositoryCategory.createSave({
        name: 'Category Mocked 1',
      });
      await fakeRepositoryCategory.createSave({
        name: 'Category Mocked 2',
      });

      const result = await serviceCategory.findAll({});

      expect(result.length).toBe(2);
      expect(result[0].name).toBe('Category Mocked 1');
      expect(result[1].name).toBe('Category Mocked 2');
    });

    it('should return NO_CONTENT when there no category exists', async () => {
      await expect(serviceCategory.findAll({})).rejects.toBeInstanceOf(
        NoContentException,
      );
    });
  });
});

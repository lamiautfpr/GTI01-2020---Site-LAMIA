import { FakeRepositoryType } from '@modules/works/repositories/fakes/Type.fakeRepository';
import { ConflictException } from '@nestjs/common';
import { ServiceType } from '../type.service';

let fakeRepositoryType: FakeRepositoryType;
let serviceType: ServiceType;

describe('Create Type - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryType = new FakeRepositoryType();
    serviceType = new ServiceType(fakeRepositoryType);
  });

  describe('successful cases', () => {
    it('should create an type successfully when there is full datas', async () => {
      const result = await serviceType.createType({
        name: 'Type MocK',
        description: 'this is description',
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe('Type MocK');
    });

    it('should create an type successfully when there not is description', async () => {
      const result = await serviceType.createType({
        name: 'Type MocK',
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe('Type MocK');
    });
  });
  describe('failure cases', () => {
    it('should not create an type when already exists one with the same name and without description', async () => {
      await serviceType.createType({
        name: 'Type MocK',
      });

      await expect(
        serviceType.createType({
          name: 'Type MocK',
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('should not create an type when already exists one with the same name', async () => {
      await serviceType.createType({
        name: 'Type MocK',
        description: 'this is a description',
      });

      await expect(
        serviceType.createType({
          name: 'Type MocK',
          description: 'this is a description',
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });
  });
});

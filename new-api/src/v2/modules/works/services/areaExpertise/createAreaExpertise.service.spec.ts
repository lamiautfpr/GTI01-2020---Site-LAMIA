import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { ServiceMember } from '@modules/members/services/member.service';
import { FakeRepositoryAreaExpertise } from '@modules/works/repositories/fakes/AreaExpertise.fakeRepository';
import { EntityAreaExpertise } from '@modules/works/typeorm/entities/areaExpertise.entity';
import { ConflictException } from '@nestjs/common';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceAreaExpertise } from '../areaExpertise.service';

let fakeRepositoryAreaExpertise: FakeRepositoryAreaExpertise;
let fakeRepositoryMember: FakeRepositoryMember;
let fakeRepositoryPatent: FakeRepositoryPatent;
let serviceAreaExpertise: ServiceAreaExpertise;
let serviceMember: ServiceMember;
let iHashProvider: IHashProvider;
let iStorageProver: IStorageProvider;

const idMember = '25ff2e6b-a777-41dc-827c-3fb8d6b4dbe7';

describe('Create Area Expertise - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryAreaExpertise = new FakeRepositoryAreaExpertise();
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeRepositoryPatent = new FakeRepositoryPatent();

    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      iHashProvider,
      iStorageProver,
    );

    serviceAreaExpertise = new ServiceAreaExpertise(
      fakeRepositoryAreaExpertise,
      serviceMember,
    );
  });

  describe('successful cases', () => {
    it('should create an area expertise successfully when there is full datas', async () => {
      const areaExpertise = new EntityAreaExpertise({
        name: 'Ciência de dados',
        description: 'Ciência de dados é uma area da computação que estuda...',
      });

      const result = await serviceAreaExpertise.createAreaExpertise({
        areaExpertise,
        idMember,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe('Area Expertise MocK');
    });

    it('should create an area expertise successfully when there not is description', async () => {
      const areaExpertise = new EntityAreaExpertise({
        name: 'Inteligência Artificial',
      });

      const result = await serviceAreaExpertise.createAreaExpertise({
        areaExpertise,
        idMember,
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe('Area Expertise MocK');
    });
  });

  describe('failure cases', () => {
    it('should not create an area expertise when already exists one with the same name and without description', async () => {
      const areaExpertise = new EntityAreaExpertise({
        name: 'Ciência de dados',
        description: '',
      });

      expect(
        serviceAreaExpertise.createAreaExpertise({
          areaExpertise,
          idMember,
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });
  });
});

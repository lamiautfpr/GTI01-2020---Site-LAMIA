import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { ServiceMember } from '@modules/members/services/member.service';
import { FakeRepositoryAreaExpertise } from '@modules/works/repositories/fakes/AreaExpertise.fakeRepository';
import { ApiNoContentResponse } from '@nestjs/swagger';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceAreaExpertise } from '../areaExpertise.service';

let iHashProvider: IHashProvider;
let iStorageProver: IStorageProvider;
let fakeRepositoryMember: FakeRepositoryMember;
let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryAreaExpertise: FakeRepositoryAreaExpertise;
let serviceAreaExpertise: ServiceAreaExpertise;
let serviceMember: ServiceMember;

describe('Create Area Expertise - Service', () => {
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
    it('should return a list of areaExpertise when Expertise exist', async () => {
      await fakeRepositoryAreaExpertise.createSave({
        name: 'Ciência de Dados',
      });
      await fakeRepositoryAreaExpertise.createSave({
        name: 'Inteligência Artificial',
      });

      const result = await serviceAreaExpertise.findAll({});

      expect(result.length).toBe(2);
      expect(result[0].name).toBe('Ciência de Dados');
      expect(result[1].name).toBe('Inteligência Artificial');
    });

    it('should return to NO_CONTENT when no areaExpertise exists', async () => {
      await expect(serviceAreaExpertise.findAll({})).rejects.toBeInstanceOf(
        ApiNoContentResponse,
      );
    });
  });
});

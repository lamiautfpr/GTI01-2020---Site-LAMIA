import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { ServiceMember } from '@modules/members/services/member.service';
import { FakeRepositoryAreaExpertise } from '@modules/works/repositories/fakes/AreaExpertise.fakeRepository';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import NoContentException from '../../../../utils/Exceptions/NoContent.exception';
import { ServiceAreaExpertise } from '../areaExpertise.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;
let fakeRepositoryAreaExpertise: FakeRepositoryAreaExpertise;

let fakeHashProvider: IHashProvider;
let iStorageProver: IStorageProvider;

let serviceMember: ServiceMember;
let serviceAreaExpertise: ServiceAreaExpertise;

describe('Find all Categories - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeHashProvider = new FakeHashProvider();
    fakeRepositoryAreaExpertise = new FakeRepositoryAreaExpertise();
    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProvider,
      iStorageProver,
    );

    serviceAreaExpertise = new ServiceAreaExpertise(
      fakeRepositoryAreaExpertise,
      serviceMember,
    );
  });
  describe('successful cases', () => {
    it('should return a list of expertise areas when expertise areas exist', async () => {
      await fakeRepositoryAreaExpertise.createSave({
        name: 'AreaExpertise Mocked 1',
      });
      await fakeRepositoryAreaExpertise.createSave({
        name: 'AreaExpertise Mocked 2',
      });

      const result = await serviceAreaExpertise.findAll({});

      expect(result.length).toBe(2);
      expect(result[0].name).toBe('AreaExpertise Mocked 1');
      expect(result[1].name).toBe('AreaExpertise Mocked 2');
    });

    it('should return NO_CONTENT when there no expertise area exists', async () => {
      await expect(serviceAreaExpertise.findAll({})).rejects.toBeInstanceOf(
        NoContentException,
      );
    });
  });
});

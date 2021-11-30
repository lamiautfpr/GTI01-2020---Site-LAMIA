import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { ServiceMember } from '@modules/members/services/member.service';
import { FakeRepositoryType } from '@modules/works/repositories/fakes/Type.fakeRepository';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import NoContentException from '../../../../utils/Exceptions/NoContent.exception';
import { ServiceType } from '../type.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;
let fakeRepositoryType: FakeRepositoryType;

let iHashProvider: IHashProvider;
let iStorageProver: IStorageProvider;

let serviceMember: ServiceMember;
let serviceType: ServiceType;

describe('Find all Types - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeRepositoryType = new FakeRepositoryType();
    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      iHashProvider,
      iStorageProver,
    );

    serviceType = new ServiceType(fakeRepositoryType, serviceMember);
  });
  describe('successful cases', () => {
    it('should return a list of types when types exist', async () => {
      await fakeRepositoryType.createSave({
        name: 'Type Mocked 1',
      });
      await fakeRepositoryType.createSave({
        name: 'Type Mocked 2',
      });

      const result = await serviceType.findAll({});

      expect(result.length).toBe(2);
      expect(result[0].name).toBe('Type Mocked 1');
      expect(result[1].name).toBe('Type Mocked 2');
    });

    it('should return NO_CONTENT when there no type exists', async () => {
      await expect(serviceType.findAll({})).rejects.toBeInstanceOf(
        NoContentException,
      );
    });
  });
});

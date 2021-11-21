import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { ServiceMember } from '@modules/members/services/member.service';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { FakeRepositoryAreaExpertise } from '@modules/works/repositories/fakes/AreaExpertise.fakeRepository';
import { EntityAreaExpertise } from '@modules/works/typeorm/entities/areaExpertise.entity';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
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

  const createMemberMock = async (
    patentName: string,
  ): Promise<EntityMember> => {
    const patent = await fakeRepositoryPatent.createSave({
      name: patentName,
    });

    return fakeRepositoryMember.createSave({
      email: 'user.mick@gmail.com',
      name: 'user.mock',
      login: 'user.mock',
      password: 'passwordForget',
      patent,
    });
  };

  const createAreaExpertiseMock = async (
    areaExpertiseName: string,
    areaExpertisedescription: string,
  ): Promise<EntityAreaExpertise> => {
    return fakeRepositoryAreaExpertise.createSave({
      name: areaExpertiseName,
      description: areaExpertisedescription,
    });
  };

  describe('successful cases', () => {
    it('should create an area expertise successfully when there is full datas', async () => {
      const areaExpertise = new EntityAreaExpertise({
        name: 'Ciência de dados',
        description: 'Ciência de dados é uma area da computação que estuda...',
      });

      const result = await serviceAreaExpertise.createAreaExpertise({
        areaExpertise,
        idMember: 'd4975451-c598-4af4-9a3b-070df207dab7',
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe('Ciência de dados');
    });

    it('should create an area expertise successfully when there not is description', async () => {
      const areaExpertise = new EntityAreaExpertise({
        name: 'Inteligência Artificial',
      });

      const result = await serviceAreaExpertise.createAreaExpertise({
        areaExpertise,
        idMember: 'd4975451-c598-4af4-9a3b-070df207dab7',
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe('Inteligência Artificial');
    });
  });

  describe('failure cases', () => {
    it('should not create an area expertise when already exists one with the same name and without description', async () => {
      const areaExpertise = new EntityAreaExpertise({
        name: 'Ciência de dados',
        description: '',
      });

      await createAreaExpertiseMock('Ciência de dados', 'description full');

      await expect(
        serviceAreaExpertise.createAreaExpertise({
          areaExpertise,
          idMember: 'd4975451-c598-4af4-9a3b-070df207dab7',
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('Should not create an area expertise when type of user not authorized', async () => {
      const member = await createMemberMock('NOVATO');

      const areaExpertise = new EntityAreaExpertise({
        name: 'Desenvolvimento web',
        description: '',
      });

      await expect(
        serviceAreaExpertise.createAreaExpertise({
          areaExpertise,
          idMember: member.id,
        }),
      ).rejects.toBeInstanceOf(UnauthorizedException);
    });
  });
});

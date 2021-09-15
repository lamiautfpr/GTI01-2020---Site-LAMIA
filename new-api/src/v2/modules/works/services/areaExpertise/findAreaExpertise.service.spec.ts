import { FakeRepositoryAreaExpertise } from '@modules/works/repositories/fakes/AreaExpertise.fakeRepository';
import {
  ConflictException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { ServiceAreaExpertise } from '../areaExpertise.service';


let fakeRepositoryAreaExpertise: FakeRepositoryAreaExpertise;
let serviceAreaExpertise: ServiceAreaExpertise;

describe('Find to Test - Services', () => {
  beforeEach(() => {
    fakeRepositoryAreaExpertise = new FakeRepositoryAreaExpertise();
    serviceAreaExpertise = new ServiceAreaExpertise(
      fakeRepositoryAreaExpertise,
    );
  });

  describe('successful case of areaExpertise', () => {
    it('should list on areaExpertise exists', async () => {
      await fakeRepositoryAreaExpertise.createSave({
        
      })

      const result = await serviceAreaExpertise.findAll({});

      expect(result.length).toBe(0);
      // expect(result[0].name).toBe('AreaExpertise 1');
      // expect(result[1].name).toBe('AreaExpertise 2');

    })
  })
})


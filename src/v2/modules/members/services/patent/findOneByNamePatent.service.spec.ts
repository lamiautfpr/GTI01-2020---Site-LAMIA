import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import { NotFoundException } from '@nestjs/common';
import { ServicePatent } from '../patent.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;
let servicePatent: ServicePatent;

describe('Find one by name Patient - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();
    servicePatent = new ServicePatent(
      fakeRepositoryPatent,
      fakeRepositoryMember,
    );
  });

  describe('successful cases', () => {
    it('should return a patent when patent exist', async () => {
      const name = 'Patent Mocked 1';

      await fakeRepositoryPatent.createSave({
        name,
      });

      const result = await servicePatent.findOneByName(name);

      expect(result).toBeInstanceOf(EntityPatent);
      expect(result.name).toBe(name);
    });

    it('should return NOT_FOUNT when no patent exists', async () => {
      const name = 'Patent Mocked 1';
      let error;

      try {
        await servicePatent.findOneByName(name);
      } catch (err) {
        error = err;
      }

      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.response.message).toStrictEqual([
        `Not found patent with name "${name}"`,
      ]);
    });
  });
});

import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import NoContentException from '../../../../utils/Exceptions/NoContent.exception';
import { ServicePatent } from '../patent.service';

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;
let servicePatent: ServicePatent;

describe('Find All Patient - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();
    servicePatent = new ServicePatent(
      fakeRepositoryPatent,
      fakeRepositoryMember,
    );
  });

  describe('successful cases', () => {
    it('should return a list of patents when patents exist', async () => {
      await fakeRepositoryPatent.createSave({
        name: 'Patent Mocked 1',
      });
      await fakeRepositoryPatent.createSave({
        name: 'Patent Mocked 2',
      });

      const result = await servicePatent.findAll({});

      expect(result.length).toBe(2);
      expect(result[0].name).toBe('Patent Mocked 1');
      expect(result[1].name).toBe('Patent Mocked 2');
    });

    it('should return NO_CONTENT when no patent exists', async () => {
      await expect(servicePatent.findAll({})).rejects.toBeInstanceOf(
        NoContentException,
      );
    });
  });
});

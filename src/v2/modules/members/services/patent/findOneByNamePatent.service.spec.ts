import MembersMock from '@modules/members/mocks/member.mock';
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

    it('should also return members COORDINATORS when fetched ADVISOR', async () => {
      const memberAdvisor = await MembersMock.giveAMeAValidMember({
        fakeRepositoryMember,
        fakeRepositoryPatent,
        name: 'member Advisor',
        patentName: 'Orientador',
      });

      const memberCoordinator = await MembersMock.giveAMeAValidMember({
        fakeRepositoryMember,
        fakeRepositoryPatent,
        name: 'member Coordinator',
        patentName: 'Coordenador',
      });

      const result = await servicePatent.findOneByName('Orientador');

      expect(result).toBeInstanceOf(EntityPatent);
      expect(result.name).toBe('Orientador');
      expect(result.members.length).toBe(2);
      expect(result.members[0]).toBe(memberCoordinator);
      expect(result.members).toContain(memberAdvisor);
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

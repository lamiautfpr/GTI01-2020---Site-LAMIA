import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { UnauthorizedException } from '@nestjs/common';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import TARGET_FOLDER from '@providers/StorageProvider/enums/targetFolder.enum';
import FakeStorageProvider from '@providers/StorageProvider/implementations/fakes/FakeStorage.provider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ERRORS_UNAUTHORIZED } from '@utils/Errors/Unauthorized';
import { ServiceMember } from '../member.service';

jest.mock(
  '@providers/StorageProvider/implementations/fakes/FakeStorage.provider',
);

let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;

const FakeStorageProviderMock = FakeStorageProvider as jest.Mock<FakeStorageProvider>;

let fakeHashProvider: IHashProvider;
let fakeStorageProvider: jest.Mocked<IStorageProvider>;

let serviceMember: ServiceMember;

describe("Update Member's avatar  - SERVICES", () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();

    fakeHashProvider = new FakeHashProvider();
    fakeStorageProvider = new FakeStorageProviderMock() as jest.Mocked<FakeStorageProvider>;

    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProvider,
      fakeStorageProvider,
    );
  });

  describe('successful cases', () => {
    it("Should add the member's avatar when member logged in exists and he don't have avatar", async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const fileName = 'avatar_mock.jpg';

      const memberUpdated = await serviceMember.updateAvatarMember({
        fileName,
        idMember: memberLoggedIn.id,
      });

      expect(memberUpdated).toBeInstanceOf(EntityMember);
      expect(memberUpdated.id).toBe(memberLoggedIn.id);
      expect(memberUpdated.avatar).toBe(fileName);

      expect(fakeStorageProvider.saveFile).toHaveBeenCalledTimes(1);
      expect(fakeStorageProvider.saveFile).toHaveBeenNthCalledWith(1, {
        fileName,
        targetFolder: TARGET_FOLDER.MEMBERS,
      });

      expect(fakeStorageProvider.deleteFile).toHaveBeenCalledTimes(0);
    });

    it("Should update the member's avatar when member logged in exists and he already have avatar", async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const oldFileName = 'old_avatar_mock.jpg';

      Object.assign(memberLoggedIn, {
        avatar: oldFileName,
      });

      await fakeRepositoryMember.updateSave(memberLoggedIn);

      const fileName = 'avatar_mock.jpg';

      const memberUpdated = await serviceMember.updateAvatarMember({
        fileName,
        idMember: memberLoggedIn.id,
      });

      expect(memberUpdated).toBeInstanceOf(EntityMember);
      expect(memberUpdated.id).toBe(memberLoggedIn.id);
      expect(memberUpdated.avatar).toBe(fileName);

      expect(fakeStorageProvider.saveFile).toHaveBeenCalledTimes(1);
      expect(fakeStorageProvider.saveFile).toHaveBeenNthCalledWith(1, {
        fileName,
        targetFolder: TARGET_FOLDER.MEMBERS,
      });
      expect(fakeStorageProvider.deleteFile).toHaveBeenCalledTimes(1);
      expect(fakeStorageProvider.deleteFile).toHaveBeenNthCalledWith(1, {
        fileName: oldFileName,
        targetFolder: TARGET_FOLDER.MEMBERS,
      });
    });
  });

  describe('failure cases', () => {
    it('Should return UNAUTHORIZED when not the member logged in exists', async () => {
      const fileName = 'avatar_mock.jpg';

      let error;
      let memberNoUpdated = undefined;

      try {
        memberNoUpdated = await serviceMember.updateAvatarMember({
          fileName,
          idMember: "id member doesn't exists",
        });
      } catch (err) {
        error = err;
      }

      expect(memberNoUpdated).toBe(undefined);
      expect(error).toBeInstanceOf(UnauthorizedException);
      expect(error.response.message).toStrictEqual([
        ERRORS_UNAUTHORIZED.YOU_NEED_TO_BE_LOGGED_IN,
      ]);

      expect(fakeStorageProvider.deleteFile).toHaveBeenCalledTimes(0);
      expect(fakeStorageProvider.saveFile).toHaveBeenCalledTimes(0);
    });
  });
});

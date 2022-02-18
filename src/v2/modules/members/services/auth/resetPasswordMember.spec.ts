/* eslint-disable @typescript-eslint/no-unused-vars */
import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { FakeRefreshTokenRepository } from '@modules/members/repositories/fakes/RefreshToken.fakeRepository';
import {
  ForbiddenException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ERRORS_FORBIDDEN } from '@utils/Errors/Forbidden';
import { ERRORS_UNPROCESSABLE_ENTITY } from '@utils/Errors/UnprocessableEntity';
import { ServiceAuth } from '../auth.service';
import { ServiceMember } from '../member.service';

jest.mock('@providers/HashProvider/implementations/fakes/FakeHashProvider');
let fakeRepositoryMember: FakeRepositoryMember;

const FakeHashProviderMock = FakeHashProvider as jest.Mock<FakeHashProvider>;
let fakeRefreshTokenRepository: FakeRefreshTokenRepository;
let fakeHashProviderMock: IHashProvider;
let fakeStorageProvider: IStorageProvider;
let serviceMember: ServiceMember;
let serviceAuth: ServiceAuth;
let serviceJwt: JwtService;
let fakeRepositoryPatent: FakeRepositoryPatent;

describe('ResetPasswordMember - Service', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();

    fakeHashProviderMock = new FakeHashProvider();

    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProviderMock,
      fakeStorageProvider,
    );
  });

  describe('Failure cases', () => {
    it('Should return FORBIDEN when to patent not have permission', async () => {
      let error: any;
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'NOVATO',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const memberToUpdate = await MembersMock.giveAMeAValidMember({
        patentName: 'NOVATO',
        fakeRepositoryMember,
        fakeRepositoryPatent,
        login: 'memberToUpdateLogin',
      });

      const auth = new ServiceAuth(
        fakeRepositoryMember,
        fakeRefreshTokenRepository,
        fakeHashProviderMock,
        serviceJwt,
      );

      try {
        await auth.resetPassword({
          loggedMemberId: memberLoggedIn.id,
          updatedMemberLogin: memberToUpdate.login,
        });
      } catch (err) {
        error = err;
      }

      expect(error).toBeInstanceOf(ForbiddenException);
      expect(error.response.message).toStrictEqual([
        `${ERRORS_FORBIDDEN.PATENT_DONT_HAVE_PERMISSION_FOR_UPDATE_MEMBER}`,
      ]);
    });

    it('Should return UNPROCESSABLE when password not defined', async () => {
      delete process.env.PASSWORD_DEFAULT_MEMBERS;
      let error;
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const memberToUpdate = await MembersMock.giveAMeAValidMember({
        patentName: 'NOVATO',
        fakeRepositoryMember,
        fakeRepositoryPatent,
        login: 'memberToUpdateLogin',
      });

      const auth = new ServiceAuth(
        fakeRepositoryMember,
        fakeRefreshTokenRepository,
        fakeHashProviderMock,
        serviceJwt,
      );

      try {
        await auth.resetPassword({
          loggedMemberId: memberLoggedIn.id,
          updatedMemberLogin: memberToUpdate.login,
        });
      } catch (err) {
        error = err;
      }

      expect(error).toBeInstanceOf(UnprocessableEntityException);
      expect(error.response.message).toStrictEqual([
        `${ERRORS_UNPROCESSABLE_ENTITY.DEFAULT_PASSWORD_NOT_DEFINED}`,
      ]);
    });
  });
});

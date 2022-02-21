/* eslint-disable @typescript-eslint/no-unused-vars */
import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { FakeRefreshTokenRepository } from '@modules/members/repositories/fakes/RefreshToken.fakeRepository';
import {
  ForbiddenException,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ERRORS_FORBIDDEN } from '@utils/Errors/Forbidden';
import { ERRORS_UNPROCESSABLE_ENTITY } from '@utils/Errors/UnprocessableEntity';
import { ERRORS_NOT_FOUND } from '@utils/Errors/NotFound';
import { ServiceAuth } from '../auth.service';
import { ServiceMember } from '../member.service';
import { ERRORS_UNAUTHORIZED } from '@utils/Errors/Unauthorized';

jest.mock('@providers/HashProvider/implementations/fakes/FakeHashProvider');
let fakeRepositoryMember: FakeRepositoryMember;

const FakeHashProviderMock = FakeHashProvider as jest.Mock<FakeHashProvider>;
let fakeRefreshTokenRepository: FakeRefreshTokenRepository;
let fakeHashProviderMock: jest.Mocked<FakeHashProvider>;
let fakeStorageProvider: IStorageProvider;
let serviceMember: ServiceMember;
let serviceAuth: ServiceAuth;
let serviceJwt: JwtService;
let fakeRepositoryPatent: FakeRepositoryPatent;

describe('ResetPasswordMember - Service', () => {
  beforeEach(() => {
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRepositoryMember = new FakeRepositoryMember();

    fakeHashProviderMock = new FakeHashProviderMock() as jest.Mocked<FakeHashProvider>;

    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProviderMock,
      fakeStorageProvider,
    );

    process.env.PASSWORD_DEFAULT_MEMBERS = 'mockedPassword';
  });

  describe('Successful cases', () => {
    it('Should reset password when member patent is ADMINISTRATOR and member to be updated EXISTS', async () => {
      const hashedPassword = 'hashedPassword';
      fakeHashProviderMock.generateHash.mockResolvedValueOnce(hashedPassword);

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

      await auth.resetPassword({
        loggedMemberId: memberLoggedIn.id,
        updatedMemberLogin: memberToUpdate.login,
      });
      const memberWithUpdatedPassword = await fakeRepositoryMember.findByLogin(
        memberToUpdate.login,
      );

      expect(memberWithUpdatedPassword.password).toBe(hashedPassword);
      expect(memberWithUpdatedPassword.password).not.toBe(
        memberToUpdate.password,
      );
    });

    it('Should reset password when member patent is ADVISOR and member to be updated EXISTS', async () => {
      const hashedPassword = 'hashedPassword';
      fakeHashProviderMock.generateHash.mockResolvedValueOnce(hashedPassword);

      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADVISOR',
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

      await auth.resetPassword({
        loggedMemberId: memberLoggedIn.id,
        updatedMemberLogin: memberToUpdate.login,
      });
      const memberWithUpdatedPassword = await fakeRepositoryMember.findByLogin(
        memberToUpdate.login,
      );

      expect(memberWithUpdatedPassword.password).toBe(hashedPassword);
      expect(memberWithUpdatedPassword.password).not.toBe(
        memberToUpdate.password,
      );
    });

    it('Should reset password when member patent is COORDINATOR and member to be updated EXISTS', async () => {
      const hashedPassword = 'hashedPassword';
      fakeHashProviderMock.generateHash.mockResolvedValueOnce(hashedPassword);

      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'COORDINATOR',
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

      await auth.resetPassword({
        loggedMemberId: memberLoggedIn.id,
        updatedMemberLogin: memberToUpdate.login,
      });
      const memberWithUpdatedPassword = await fakeRepositoryMember.findByLogin(
        memberToUpdate.login,
      );

      expect(memberWithUpdatedPassword.password).toBe(hashedPassword);
      expect(memberWithUpdatedPassword.password).not.toBe(
        memberToUpdate.password,
      );
    });
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
    it('Should return UNAUTHORIZED when not member logged in', async () => {
      let error;

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
          loggedMemberId: 'id member does not exist',
          updatedMemberLogin: memberToUpdate.login,
        });
      } catch (err) {
        error = err;
      }

      expect(error).toBeInstanceOf(UnauthorizedException);
      expect(error.response.message).toStrictEqual([
        ERRORS_UNAUTHORIZED.YOU_NEED_TO_BE_LOGGED_IN,
      ]);
    });

    it('Should return NOT_FOUND when member login does not exist', async () => {
      let error;
      const notExistentLogin = 'Login not exist';

      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'ADMINISTRATOR',
        fakeRepositoryMember,
        fakeRepositoryPatent,
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
          updatedMemberLogin: notExistentLogin,
        });
      } catch (err) {
        error = err;
      }

      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.response.message).toStrictEqual([
        `${ERRORS_NOT_FOUND.NOT_FOUND_LOGIN} "${notExistentLogin}"`,
      ]);
    });
  });
});

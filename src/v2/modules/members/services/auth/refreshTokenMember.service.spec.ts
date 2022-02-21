import { ERRORS_UNAUTHORIZED } from './../../../../utils/Errors/Unauthorized';
import { UnauthorizedException } from '@nestjs/common';
import ICreateRefreshTokenDTO from '@modules/members/dtos/ICreateRefreshToken.dto';
import { ServicePatent } from './../patent.service';
/* eslint-disable @typescript-eslint/no-unused-vars */
import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { FakeRefreshTokenRepository } from '@modules/members/repositories/fakes/RefreshToken.fakeRepository';
import { JwtService } from '@nestjs/jwt';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceMember } from '../member.service';
import { ServiceAuth } from './../auth.service';
import IPayloadTokenDTO from '@modules/members/dtos/IPayloadToken.dto';

jest.mock('@providers/HashProvider/implementations/fakes/FakeHashProvider');

const FakeHashProviderMock = FakeHashProvider as jest.Mock<FakeHashProvider>;
let fakeRefreshTokenRepository: FakeRefreshTokenRepository;
let fakeHashProviderMock: IHashProvider;
let fakeStorageProvider: IStorageProvider;
let serviceMember: ServiceMember;
let servicePatent: ServicePatent;
let serviceAuth: ServiceAuth;
let serviceJwt: JwtService;
let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;

describe('RefreshTokenRepository - Service', () => {
  beforeEach(() => {
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRefreshTokenRepository = new FakeRefreshTokenRepository();
    fakeHashProviderMock = new FakeHashProvider();

    fakeHashProviderMock = new FakeHashProviderMock() as jest.Mocked<FakeHashProvider>;

    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProviderMock,
      fakeStorageProvider,
    );
    serviceJwt = new JwtService({});
    process.env.PASSWORD_DEFAULT_MEMBERS = 'mockedPassword';
  });

  describe('Failure cases', () => {
    it('Should return UNAUTHORIZED when to token invalid', async () => {
      let error: any;

      const serviceAuth = new ServiceAuth(
        fakeRepositoryMember,
        fakeRefreshTokenRepository,
        fakeHashProviderMock,
        serviceJwt,
      );

      try {
        await serviceAuth.refreshToken('mock');
      } catch (e) {
        error = e;
      }

      expect(error).toBeInstanceOf(UnauthorizedException);
      expect(error.response.message).toStrictEqual([
        `${ERRORS_UNAUTHORIZED.OLD_TOKEN_INVALID}`,
      ]);
    });
    // it('Should return UNAUTHORIZED to token valid and member not is valid', async () => {

    // });
  });

  describe('Success cases', () => {
    it('Should return Token', async () => {
      let error: any;
      const token =
        'e1yJhbGciOiJIUzI1NiIsInR5cCI6IkpX23213VCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

      const serviceAuth = new ServiceAuth(
        fakeRepositoryMember,
        fakeRefreshTokenRepository,
        fakeHashProviderMock,
        serviceJwt,
      );

      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'NOVATO',
        login: 'memberNovato',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const data: ICreateRefreshTokenDTO = {
        hash: token,
        login: member.login,
      };

      await fakeRefreshTokenRepository.createSave(data);

      const newToken = await serviceAuth.refreshToken(member.login);
    });
  });
});

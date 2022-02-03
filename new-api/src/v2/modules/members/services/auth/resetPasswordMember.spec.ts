import MembersMock from '@modules/members/mocks/member.mock';
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceMember } from '../member.service';
import { ServiceAuth } from '../auth.service';
import { IResetPasswordMemberDTO } from '@modules/members/dtos/auth/IResetPasswordMember.dto';
import { FakeRefreshTokenRepository } from '@modules/members/repositories/fakes/RefreshToken.fakeRepository';
import { JwtService } from '@nestjs/jwt';
import auth from '@config/auth';
import { ForbiddenException } from '@nestjs/common';

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
    it('When user does not have permission to update member', async () => {
      const memberLoggedIn = await MembersMock.giveAMeAValidMember({
        patentName: 'NOVATO',
        fakeRepositoryMember,
        fakeRepositoryPatent,
      });

      const data = {
        email: 'test@gmail.com',
        name: 'Teste authentication',
        patentId: '35fa6ebd-a450-4a40-b433-5ad52e0be0b2',
      };

      const member = await serviceMember.createMember({
        ...data,
        idMemberLogged: memberLoggedIn.id,
      });

      const auth = new ServiceAuth(
        fakeRepositoryMember,
        fakeRefreshTokenRepository,
        fakeHashProviderMock,
        serviceJwt,
      );

      const refreshToken = auth.refreshToken(member.id);

      expect(refreshToken).toThrowError(ForbiddenException);
    });

    // it('When is password not default defined', async () => {

    // });
  });
});

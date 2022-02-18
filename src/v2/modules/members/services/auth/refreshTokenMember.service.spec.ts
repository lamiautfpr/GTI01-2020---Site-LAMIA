/* eslint-disable @typescript-eslint/no-unused-vars */
import { FakeRepositoryMember } from '@modules/members/repositories/fakes/Member.fakeRepository';
import { FakeRepositoryPatent } from '@modules/members/repositories/fakes/Patent.fakeRepository';
import { FakeRefreshTokenRepository } from '@modules/members/repositories/fakes/RefreshToken.fakeRepository';
import { JwtService } from '@nestjs/jwt';
import FakeHashProvider from '@providers/HashProvider/implementations/fakes/FakeHashProvider';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import IStorageProvider from '@providers/StorageProvider/models/IStorageProvider';
import { ServiceMember } from '../member.service';
import { ServiceAuth } from './../auth.service';

jest.mock('@providers/HashProvider/implementations/fakes/FakeHashProvider');

const FakeHashProviderMock = FakeHashProvider as jest.Mock<FakeHashProvider>;
let fakeRefreshTokenRepository: FakeRefreshTokenRepository;
let fakeHashProviderMock: IHashProvider;
let fakeStorageProvider: IStorageProvider;
let serviceMember: ServiceMember;
let serviceAuth: ServiceAuth;
let serviceJwt: JwtService;
let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;

describe('RefreshTokenRepository - Service', () => {
  beforeEach(() => {
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeRepositoryPatent = new FakeRepositoryPatent();

    fakeHashProviderMock = new FakeHashProvider();

    serviceMember = new ServiceMember(
      fakeRepositoryMember,
      fakeRepositoryPatent,
      fakeHashProviderMock,
      fakeStorageProvider,
    );
  });

  describe('Failure cases', () => {
    it('Should return UNAUTHORIZED when to token invalid', async () => {
      const token =
        'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0Mzk0Nzc4MSwiaWF0IjoxNjQzOTQ3NzgxfQ.1ipKglFdjHIUlgMLEeYl4waTjXVLTi369NJEvlO7AAs';
      let error;

      const auth = new ServiceAuth(
        fakeRepositoryMember,
        fakeRefreshTokenRepository,
        fakeHashProviderMock,
        serviceJwt,
      );

      try {
        await auth.refreshToken(token);
      } catch (err) {
        error = err;
      }
    });
  });
});

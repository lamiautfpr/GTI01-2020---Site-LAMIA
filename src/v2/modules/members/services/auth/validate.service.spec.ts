import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
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
import { ILoginDTO } from '@modules/members/dtos/ILogin.dto';
import auth from '@config/auth';

jest.mock('@providers/HashProvider/implementations/fakes/FakeHashProvider');

const FakeHashProviderMock = FakeHashProvider as jest.Mock<FakeHashProvider>;
let fakeHashProviderMock: jest.Mocked<FakeHashProvider>;
let fakeRefreshTokenRepository: FakeRefreshTokenRepository;
let fakeStorageProvider: IStorageProvider;
let serviceMember: ServiceMember;
let servicePatent: ServicePatent;
let serviceAuth: ServiceAuth;
let serviceJwt: JwtService;
let fakeRepositoryPatent: FakeRepositoryPatent;
let fakeRepositoryMember: FakeRepositoryMember;

describe('Validate - Service', () => {
  beforeEach(() => {
    fakeRepositoryMember = new FakeRepositoryMember();
    fakeRepositoryPatent = new FakeRepositoryPatent();
    fakeRefreshTokenRepository = new FakeRefreshTokenRepository();

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
    it('Should HASH save and HASH member not compare', async () => {
      const token =
        'e1yJhbGciOiJIUzI1NiIsInR5cCI6IkpX23213VCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'NOVATO',
        fakeRepositoryMember,
        fakeRepositoryPatent,
        login: 'memberToUpdateLogin',
      });

      const data: ICreateRefreshTokenDTO = {
        hash: token,
        login: 'mock',
      };

      await fakeRefreshTokenRepository.createSave(data);

      serviceAuth = new ServiceAuth(
        fakeRepositoryMember,
        fakeRefreshTokenRepository,
        fakeHashProviderMock,
        serviceJwt,
      );

      const memberLogin: ILoginDTO = {
        username: member.email,
        password: 'mockedPassword',
      };

      const resultValidate = await serviceAuth.validate(memberLogin);

      expect(resultValidate).toStrictEqual(null);
    });

    it('Should be returned when the hash matches', async () => {
      fakeHashProviderMock.compareHash.mockResolvedValueOnce(true);

      const token =
        'e1yJhbGciOiJIUzI1NiIsInR5cCI6IkpX23213VCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

      const member = await MembersMock.giveAMeAValidMember({
        patentName: 'NOVATO',
        fakeRepositoryMember,
        fakeRepositoryPatent,
        login: 'memberToUpdateLogin',
      });

      const data: ICreateRefreshTokenDTO = {
        hash: token,
        login: 'mock',
      };

      await fakeRefreshTokenRepository.createSave(data);

      serviceAuth = new ServiceAuth(
        fakeRepositoryMember,
        fakeRefreshTokenRepository,
        fakeHashProviderMock,
        serviceJwt,
      );

      const memberLogin: ILoginDTO = {
        username: member.email,
        password: 'fake password',
      };

      const resolveMember = await serviceAuth.validate(memberLogin);

      expect(resolveMember).toBeInstanceOf(EntityMember);
    });
  });
});

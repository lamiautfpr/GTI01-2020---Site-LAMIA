import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import { IResetPasswordMemberDTO } from '../dtos/auth/IResetPasswordMember.dto';
import { ILoginDTO } from '../dtos/ILogin.dto';
import IPayloadTokenDTO from '../dtos/IPayloadToken.dto';
import { IAuthResponse, IResponseLoginDTO } from '../dtos/IResponseLogin.dto';
import IRepositoryMember from '../repositories/IRepositoryMember';
import IRepositoryRefreshToken from '../repositories/IRepositoryRefreshToken';
import { EntityMember } from '../typeorm/entities/member.entity';
import { EntityRefreshToken } from '../typeorm/entities/refreshToken.entity';
import { RepositoryMember } from '../typeorm/repositories/member.repository';
import { RepositoryRefreshToken } from '../typeorm/repositories/refreshToken.repository';
import * as services from './auth';

@Injectable()
export class ServiceAuth {
  constructor(
    @InjectRepository(RepositoryMember)
    private readonly memberRepository: IRepositoryMember,

    @InjectRepository(RepositoryRefreshToken)
    private readonly refreshTokenRepository: IRepositoryRefreshToken,

    @Inject('HashProvider')
    private readonly hashProvider: IHashProvider,

    private readonly jwtService: JwtService,
  ) {}

  async validate({
    username,
    password,
  }: ILoginDTO): Promise<EntityMember | null> {
    const member = await this.memberRepository.findByEmail(username);

    if (
      member &&
      (await this.hashProvider.compareHash(password, member.password))
    ) {
      return member;
    }
    return null;
  }

  async login(member: EntityMember): Promise<IResponseLoginDTO> {
    const payload: IPayloadTokenDTO = {
      sub: member.id,
      login: member.login,
      patent: member.patent.name,
    };
    const hash = this.jwtService.sign(payload);

    const existValidToken = await this.refreshTokenRepository.findValidByLogin(
      member.login,
    );

    if (existValidToken) {
      await this.invalidateToken(existValidToken);
    }

    await this.refreshTokenRepository.createSave({
      hash,
      login: member.login,
    });

    return {
      auth: {
        accessToken: hash,
      },
      member,
    };
  }

  async refreshToken(oldToken: string): Promise<IAuthResponse> {
    const isValidToken = await this.refreshTokenRepository.findValidByHash(
      oldToken,
    );

    const messagesError = ['oldToken is not valid'];

    if (!isValidToken) {
      throw new UnauthorizedException(messagesError);
    }

    const member = await this.memberRepository.findByLogin(isValidToken.login);

    if (!member) {
      throw new UnauthorizedException(messagesError);
    }

    const newToken = (await this.login(member)).auth;

    return newToken;
  }

  private async invalidateToken(token: EntityRefreshToken): Promise<void> {
    await this.refreshTokenRepository.updateSave({
      ...token,
      status: false,
    });
  }

  async resetPassword({
    loggedMemberId,
    updatedMemberLogin,
  }: IResetPasswordMemberDTO): Promise<void> {
    const loggedMember = await this.memberRepository.findById(loggedMemberId);

    if (!loggedMember) {
      throw new UnauthorizedException(['I need to be logged in']);
    }

    const updatedMember = await this.memberRepository.findByLogin(
      updatedMemberLogin,
    );

    if (!updatedMember) {
      throw new NotFoundException([
        `Not found member with login "${updatedMemberLogin}""`,
      ]);
    }

    await services.resetPassword({
      updatedMember,
      loggedMember,
      repository: this.memberRepository,
      hashProvider: this.hashProvider,
    });
  }
}

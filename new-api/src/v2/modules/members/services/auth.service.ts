import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import { classToClass } from 'class-transformer';
import { ILoginDTO } from '../dtos/ILogin.dto';
import { IResponseLogin } from '../dtos/IResponseLogin.dto';
import IRepositoryMember from '../repositories/IRepositoryMember';
import { EntityMember } from '../typeorm/entities/member.entity';
import { RepositoryMember } from '../typeorm/repositories/member.repository';

@Injectable()
export class ServiceAuth {
  constructor(
    @InjectRepository(RepositoryMember)
    private readonly memberRepository: IRepositoryMember,

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
      return classToClass(member);
    }
    return null;
  }

  async login(member: EntityMember): Promise<IResponseLogin> {
    const payload = {
      username: member.email,
      sub: member.id,
      patent: member.patent.name,
    };

    return {
      auth: {
        accessToken: this.jwtService.sign(payload),
      },
      member,
    };
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import { classToClass } from 'class-transformer';
import { ILoginDTO } from '../dtos/ILogin.dto';
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
}

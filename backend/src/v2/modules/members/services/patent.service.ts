import IOrderByDTO, {
  ISelectOrderDTO,
} from '@modules/shared/dtos/IOrderBy.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERRORS_UNAUTHORIZED } from '@utils/Errors/Unauthorized';
import { ICreatePatentDTO } from '../dtos/Patent/ICreatePatent.dto';
import IRepositoryMember from '../repositories/IRepositoryMember';
import IRepositoryPatent from '../repositories/IRepositoryPatent';
import { EntityPatent } from '../typeorm/entities/patent.entity';
import { RepositoryMember } from '../typeorm/repositories/member.repository';
import { RepositoryPatent } from '../typeorm/repositories/patent.repository';
import * as services from './patent';

@Injectable()
export class ServicePatent {
  constructor(
    @InjectRepository(RepositoryPatent)
    private readonly patentRepository: IRepositoryPatent,

    @InjectRepository(RepositoryMember)
    private readonly memberRepository: IRepositoryMember,
  ) {}

  public async createPatent({
    newPatentData,
    idMember,
  }: ICreatePatentDTO): Promise<EntityPatent> {
    const member = await this.memberRepository.findById(idMember);

    if (!member) {
      throw new UnauthorizedException([
        ERRORS_UNAUTHORIZED.YOU_NEED_TO_BE_LOGGED_IN,
      ]);
    }

    return services.create({
      newPatentData,
      member,
      repository: this.patentRepository,
    });
  }

  public async findAll({
    orderBy,
    direction,
  }: ISelectOrderDTO): Promise<EntityPatent[]> {
    const order: IOrderByDTO<EntityPatent> = {
      [orderBy || 'name']: direction || 'ASC',
    };

    return services.findAll({ repository: this.patentRepository, order });
  }

  public async findOneByName(name: string): Promise<EntityPatent> {
    return services.findOneByName({ repository: this.patentRepository, name });
  }
}

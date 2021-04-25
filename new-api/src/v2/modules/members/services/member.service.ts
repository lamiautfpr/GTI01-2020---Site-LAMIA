import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import IRepositoryMember from '../repositories/IRepositoryMember';
import { RepositoryMember } from '../typeorm/repositories/member.repository';

@Injectable()
export class ServiceMember {
  constructor(
    @InjectRepository(RepositoryMember)
    private readonly exampleRepository: IRepositoryMember,
  ) {}

  // public async createMember(data: ICreateMemberDTO): Promise<EntityMember> {
  //   return create({
  //     data: data,
  //     repository: this.exampleRepository,
  //   });
  // }

  // public async findAll({
  //   attribute,
  //   direction,
  // }: ISelectOrderMemberDTO): Promise<EntityMember[]> {
  //   const order: IOrderMemberDTO = {
  //     [attribute || 'name']: direction || 'ASC',
  //   };

  //   return findAll({ repository: this.exampleRepository, order });
  // }
}

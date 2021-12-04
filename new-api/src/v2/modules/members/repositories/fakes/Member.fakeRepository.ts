/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import ICreateMemberDTO from '../../dtos/ICreateMember.dto';
import IOrderByMember from '../../dtos/IOrderByMember.dto';
import IRepositoryMember from '../../repositories/IRepositoryMember';

export class FakeRepositoryMember implements IRepositoryMember {
  private members: EntityMember[];

  constructor() {
    this.members = [];
  }

  public async createSave(data: ICreateMemberDTO): Promise<EntityMember> {
    const member = new EntityMember(data);

    this.members.push(member);

    return member;
  }

  public async updateSave(data: EntityMember): Promise<EntityMember> {
    const index = this.members.findIndex((member) => member.id === data.id);

    this.members[index] = data;

    return this.members[index];
  }

  public async findById(id: string): Promise<EntityMember | undefined> {
    return this.members.find((member) => member.id === id);
  }

  public async findByEmail(email: string): Promise<EntityMember | undefined> {
    return this.members.find((member) => member.email === email);
  }

  public async findByLogin(login: string): Promise<EntityMember | undefined> {
    return this.members.find((member) => member.login === login);
  }

  public async findByLikeName(
    name: string,
    order?: IOrderByMember,
  ): Promise<EntityMember[] | undefined> {
    return this.members.filter((member) => member.name === name);
  }

  public async findAll(
    order?: IOrderByMember,
  ): Promise<EntityMember[] | undefined> {
    return this.members;
  }

  public async countLogin(login: string): Promise<[EntityMember[], number]> {
    const members = this.members.filter((member) =>
      member.login.includes(login),
    );
    return [members, members.length];
  }

  public async removeById(id: string): Promise<void> {
    this.members = this.members.filter((member) => member.id !== id);
  }
}

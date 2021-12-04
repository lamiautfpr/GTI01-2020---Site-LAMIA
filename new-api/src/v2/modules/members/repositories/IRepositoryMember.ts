import ICreateMemberDTO from '../dtos/ICreateMember.dto';
import IOrderByMember from '../dtos/IOrderByMember.dto';
import { EntityMember } from '../typeorm/entities/member.entity';

export default interface IRepositoryMember {
  createSave(data: ICreateMemberDTO): Promise<EntityMember>;
  updateSave(data: EntityMember): Promise<EntityMember>;
  findById(id: string): Promise<EntityMember | undefined>;
  findByEmail(email: string): Promise<EntityMember | undefined>;
  findByLogin(login: string): Promise<EntityMember | undefined>;
  findByLikeName(
    name: string,
    order?: IOrderByMember,
  ): Promise<EntityMember[] | undefined>;
  findAll(order?: IOrderByMember): Promise<EntityMember[] | undefined>;
  countLogin(login: string): Promise<[EntityMember[], number]>;
  removeById(id: string): Promise<void>;
}

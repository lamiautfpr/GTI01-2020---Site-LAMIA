import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import IFindOfficeMember from '../dtos/IFindOfficeMember.dto';
import IOrderOfficeMember from '../dtos/IOrderOfficeMember.dto';
import { EntityOfficeMember } from '../typeorm/officeMember.entity';

export default interface IRepositoryOfficeMember {
  createSave(data: ICreateOfficeMemberDTO): Promise<EntityOfficeMember>;
  updateSave(data: EntityOfficeMember): Promise<EntityOfficeMember>;

  findById(id: string): Promise<EntityOfficeMember | undefined>;
  findByName(name: string): Promise<EntityOfficeMember | undefined>;

  findAll(
    order?: IOrderOfficeMember,
  ): Promise<EntityOfficeMember[] | undefined>;
  findByWhere(
    where: IFindOfficeMember,
    order?: IOrderOfficeMember,
  ): Promise<EntityOfficeMember[] | undefined>;

  removeById(id: string): Promise<void>;
}

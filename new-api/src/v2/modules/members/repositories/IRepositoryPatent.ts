import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import IFindOfficeMember from '../dtos/IFindOfficeMember.dto';
import IOrderOfficeMember from '../dtos/IOrderOfficeMember.dto';
import { EntityPatent } from '../typeorm/entities/patent.entity';

export default interface IRepositoryPatent {
  createSave(data: ICreateOfficeMemberDTO): Promise<EntityPatent>;
  updateSave(data: EntityPatent): Promise<EntityPatent>;

  findById(id: string): Promise<EntityPatent | undefined>;
  findByName(name: string): Promise<EntityPatent | undefined>;

  findAll(order?: IOrderOfficeMember): Promise<EntityPatent[] | undefined>;
  findByWhere(
    where: IFindOfficeMember,
    order?: IOrderOfficeMember,
  ): Promise<EntityPatent[] | undefined>;

  removeById(id: string): Promise<void>;
}

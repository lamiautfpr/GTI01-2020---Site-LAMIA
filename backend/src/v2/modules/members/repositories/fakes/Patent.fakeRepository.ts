/* eslint-disable @typescript-eslint/no-unused-vars */
import CREATION_PERMISSION_PATENTS from '@modules/members/enums/CREATION_PERMISSION_PATENTS';
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import IOrderByDTO from '@modules/shared/dtos/IOrderBy.dto';
import { getKeys } from '../../../../utils/handleEnums';
import ICreatePatentDTO from '../../dtos/Patent/ICreatePatent.dto';
import IFindPatentDTO from '../../dtos/Patent/IFindPatent.dto';
import IRepositoryPatent from '../IRepositoryPatent';

export class FakeRepositoryPatent implements IRepositoryPatent {
  private patents: EntityPatent[];

  constructor() {
    this.patents = [];
  }

  public async createSave(data: ICreatePatentDTO): Promise<EntityPatent> {
    const patent = new EntityPatent(data);

    if (getKeys(CREATION_PERMISSION_PATENTS).includes(data.name)) {
      patent.id = CREATION_PERMISSION_PATENTS[data.name];
    }

    this.patents.push(patent);

    return patent;
  }

  public async updateSave(data: EntityPatent): Promise<EntityPatent> {
    const index = this.patents.findIndex((patent) => patent.id === data.id);

    this.patents[index] = data;
    return this.patents[index];
  }

  public async findById(id: string): Promise<EntityPatent | undefined> {
    return this.patents.find((patent) => patent.id === id);
  }

  public async findByName(name: string): Promise<EntityPatent | undefined> {
    return this.patents.find((patent) => patent.name === name);
  }

  public async findAll(
    order?: IOrderByDTO<EntityPatent>,
  ): Promise<EntityPatent[] | undefined> {
    return this.patents;
  }

  public async findByWhere(
    where: IFindPatentDTO,
    order?: IOrderByDTO<EntityPatent>,
  ): Promise<EntityPatent[] | undefined> {
    return this.patents;
  }

  public async removeById(id: string): Promise<void> {
    this.patents = this.patents.filter((patent) => patent.id !== id);
  }
}

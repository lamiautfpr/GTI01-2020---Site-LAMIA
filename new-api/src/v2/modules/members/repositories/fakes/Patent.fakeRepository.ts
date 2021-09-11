/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import ICreatePatentDTO from '../../dtos/Patent/ICreatePatent.dto';
import IFindPatentDTO from '../../dtos/Patent/IFindPatent.dto';
import IOrderPatentDTO from '../../dtos/Patent/IOrderPatent.dto';
import IRepositoryPatent from '../IRepositoryPatent';

export class FakeRepositoryPatent implements IRepositoryPatent {
  private patents: EntityPatent[];

  constructor() {
    this.patents = [];
  }

  public async createSave(data: ICreatePatentDTO): Promise<EntityPatent> {
    const patent = new EntityPatent(data);

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
    order?: IOrderPatentDTO,
  ): Promise<EntityPatent[] | undefined> {
    return this.patents;
  }

  public async findByWhere(
    where: IFindPatentDTO,
    order?: IOrderPatentDTO,
  ): Promise<EntityPatent[] | undefined> {
    return this.patents;
  }

  public async removeById(id: string): Promise<void> {
    this.patents = this.patents.filter((patent) => patent.id !== id);
  }
}

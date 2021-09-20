/* eslint-disable @typescript-eslint/no-unused-vars */
import IOrderPatentDTO from '@modules/members/dtos/Patent/IOrderPatent.dto';
import ICreateAreaExpertiseDTO from '@modules/works/dtos/areaExpertise/ICreateAreaExpertise.dto';
import IRepositoryAreaExpertise from '@modules/works/repositories/IRepositoryAreaExpertise';
import { EntityAreaExpertise } from '@modules/works/typeorm/entities/areaExpertise.entity';

export class FakeRepositoryAreaExpertise implements IRepositoryAreaExpertise {
  private areasExpertise: EntityAreaExpertise[];

  constructor() {
    this.areasExpertise = [];
  }

  public async createSave(
    data: ICreateAreaExpertiseDTO,
  ): Promise<EntityAreaExpertise | undefined> {
    const areaExpertise = new EntityAreaExpertise(data);

    this.areasExpertise.push(areaExpertise);

    return areaExpertise;
  }

  public async findAll(
    order?: IOrderPatentDTO,
  ): Promise<EntityAreaExpertise[] | undefined> {
    return this.areasExpertise;
  }

  public async findByName(
    name: string,
  ): Promise<EntityAreaExpertise | undefined> {
    const areaExpertise = this.areasExpertise.find(
      (area) => area.name === name,
    );

    return areaExpertise;
  }
}

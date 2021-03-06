import { ExampleEntity } from './example.entity';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import IExampleRepository from '../repositories/IExampleRepository';
import { ICreateExampleDTO } from '../dtos/ICreateExample.dto';
import { IFindExampleDTO } from '../dtos/IFindExample.dto';
import { IOrderExampleDTO } from '../dtos/IOrderExample.dto';

@EntityRepository(ExampleEntity)
export class ExampleRepository implements IExampleRepository {
  private ormRepository: Repository<ExampleEntity>;

  constructor() {
    this.ormRepository = getRepository(ExampleEntity);
  }

  public async create(
    createExampleDTO: ICreateExampleDTO,
  ): Promise<ExampleEntity> {
    const example = this.ormRepository.create(createExampleDTO);

    await this.ormRepository.save(example);

    return example;
  }

  public async update(example: ExampleEntity): Promise<ExampleEntity> {
    await this.ormRepository.save(example);
    return example;
  }

  public async findById(id: string): Promise<ExampleEntity | undefined> {
    const example = await this.ormRepository.findOne(id);
    return example;
  }

  public async find(
    orderExampleDTO?: IOrderExampleDTO,
  ): Promise<ExampleEntity[] | undefined> {
    const examples = await this.ormRepository.find({
      order: { ...orderExampleDTO },
    });
    return examples;
  }

  public async findByWhere(
    findExampleDTO: IFindExampleDTO,
    orderExampleDTO?: IOrderExampleDTO,
  ): Promise<ExampleEntity[] | undefined> {
    const examples = await this.ormRepository.find({
      where: { ...findExampleDTO },
      order: { ...orderExampleDTO },
    });
    return examples;
  }

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

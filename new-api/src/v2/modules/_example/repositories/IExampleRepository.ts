import { ICreateExampleDTO } from '../dtos/ICreateExample.dto';
import { IFindExampleDTO } from '../dtos/IFindExample.dto';
import { IOrderExampleDTO } from '../dtos/IOrderExample.dto';
import { ExampleEntity } from '../typeorm/example.entity';

export default interface IExampleRepository {
  createSave(createExampleDTO: ICreateExampleDTO): Promise<ExampleEntity>;
  updateSave(example: ExampleEntity): Promise<ExampleEntity>;

  findById(id: string): Promise<ExampleEntity | undefined>;
  findAll(
    orderExampleDTO?: IOrderExampleDTO,
  ): Promise<ExampleEntity[] | undefined>;
  findByWhere(
    findExampleDTO: IFindExampleDTO,
    orderExampleDTO?: IOrderExampleDTO,
  ): Promise<ExampleEntity[] | undefined>;

  removeById(id: string): Promise<void>;
}

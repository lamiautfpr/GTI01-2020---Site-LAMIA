import { ICreateExampleDTO } from '../dtos/ICreateExample.dto';
import { IFindExampleDTO } from '../dtos/IFindExample.dto';
import { IOrderExampleDTO } from '../dtos/IOrderExample.dto';
import { ExampleEntity } from '../typeorm/example.entity';

export default interface IExampleRepository {
  create(createExampleDTO: ICreateExampleDTO): Promise<ExampleEntity>;
  update(example: ExampleEntity): Promise<ExampleEntity>;

  findById(id: string): Promise<ExampleEntity | undefined>;
  find(
    orderExampleDTO?: IOrderExampleDTO,
  ): Promise<ExampleEntity[] | undefined>;
  findByWhere(
    findExampleDTO: IFindExampleDTO,
    orderExampleDTO?: IOrderExampleDTO,
  ): Promise<ExampleEntity[] | undefined>;

  remove(id: string): Promise<void>;
}

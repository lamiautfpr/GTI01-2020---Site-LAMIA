import { ExampleEntity } from '../typeorm/example.entity';

export type IOrderExampleDTO = {
  [K in keyof ExampleEntity]?: 'ASC' | 'DESC';
};

import { ExampleEntity } from '../typeorm/example.entity';

type ExampleAttributes = keyof ExampleEntity;

export type IOrderExampleDTO = {
  [key in ExampleAttributes]: 'ASC' | 'DESC';
};

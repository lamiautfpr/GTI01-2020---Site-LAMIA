import IExampleRepository from '@modules/_example/repositories/IExampleRepository';
import { ExampleEntity } from '@modules/_example/typeorm/example.entity';
import { IOrderExampleDTO } from '@modules/_example/dtos/IOrderExample.dto';

interface IRequest {
  repository: IExampleRepository;
}

export const find = async (params: IRequest): Promise<ExampleEntity[]> => {
  const { repository } = params;

  const examples = await repository.findAll({ createAt: 'DESC' });

  return examples;
};

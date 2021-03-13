import { ICreateExampleDTO } from '@modules/_example/dtos/ICreateExample.dto';
import IExampleRepository from '@modules/_example/repositories/IExampleRepository';
import { ExampleEntity } from '@modules/_example/typeorm/example.entity';

interface IRequest {
  data: ICreateExampleDTO;
  repository: IExampleRepository;
}

export const create = async (params: IRequest): Promise<ExampleEntity> => {
  const { repository, data } = params;

  const example = await repository.createSave(data);

  return example;
};

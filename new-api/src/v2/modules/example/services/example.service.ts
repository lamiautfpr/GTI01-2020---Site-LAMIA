import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateExampleDTO } from '../dtos/ICreateExample.dto';
import IExampleRepository from '../repositories/IExampleRepository';
import { ExampleEntity } from '../typeorm/example.entity';
import { ExampleRepository } from '../typeorm/example.repository';
import { create } from './create';
import { find } from './find';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(ExampleRepository)
    private readonly exampleRepository: IExampleRepository,
  ) {}

  public async createExample(
    createExampleDTO: ICreateExampleDTO,
  ): Promise<ExampleEntity> {
    return create({
      data: createExampleDTO,
      repository: this.exampleRepository,
    });
  }

  public async findAll() {
    return find({ repository: this.exampleRepository });
  }
}

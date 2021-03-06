import { ApiConfig } from '../../../config/api';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from '../services/example.service';
import { ICreateExampleDTO } from '../dtos/ICreateExample.dto';
import IExampleRepository from '../repositories/IExampleRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { ExampleRepository } from '../typeorm/example.repository';

@Controller(`${ApiConfig.version}/examples`)
export class ExampleController {
  constructor(
    @InjectRepository(ExampleRepository)
    private readonly exampleRepository: IExampleRepository,
    private readonly exampleService: ExampleService,
  ) {}

  @Get('/teste')
  getTeste(): any {
    return this.exampleService.getExample();
  }
  @Post()
  create(@Body() createExampleDTO: ICreateExampleDTO) {
    return this.exampleRepository.createSave(createExampleDTO);
  }
}

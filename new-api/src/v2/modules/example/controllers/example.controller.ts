import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiConfig } from '../../../config/api';
import { ICreateExampleDTO } from '../dtos/ICreateExample.dto';
import { ExampleService } from '../services/example.service';

@Controller(`${ApiConfig.version}/examples`)
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Post()
  create(@Body() createExampleDTO: ICreateExampleDTO) {
    try {
      return this.exampleService.createExample(createExampleDTO);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  getTeste(): any {
    return this.exampleService.findAll();
  }
}

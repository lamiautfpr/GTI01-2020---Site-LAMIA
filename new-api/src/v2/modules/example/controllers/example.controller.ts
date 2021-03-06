import { ApiConfig } from '../../../config/api';
import { Controller, Get } from '@nestjs/common';
import { ExampleService } from '../services/example.service';

@Controller(`${ApiConfig.version}/examples`)
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  getLamia(): any {
    return this.exampleService.getExample();
  }
}

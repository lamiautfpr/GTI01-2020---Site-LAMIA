import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  getExample(): any {
    return { message: 'Service for example' };
  }
}

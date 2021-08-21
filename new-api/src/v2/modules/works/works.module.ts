import { Module } from '@nestjs/common';
// Controllers
import { Controllers } from './controllers';
import { Services } from './services';

import TypeOrmModules from '@modules/works/typeorm';

@Module({
  imports: [TypeOrmModules],
  controllers: [...Controllers],
  providers: [...Services],
})
export class ModuleWorks {}

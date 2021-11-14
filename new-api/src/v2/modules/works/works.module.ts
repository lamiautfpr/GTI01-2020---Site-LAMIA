import { Module } from '@nestjs/common';
// Controllers
import { Controllers } from './controllers';
import { Services } from './services';

import TypeOrmModules from '@modules/works/typeorm';
import { ModuleMember } from '@modules/members/member.module';

@Module({
  imports: [TypeOrmModules, ModuleMember],
  controllers: [...Controllers],
  providers: [...Services],
})
export class ModuleWorks {}

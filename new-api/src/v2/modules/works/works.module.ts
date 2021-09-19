import { Module } from '@nestjs/common';
// Controllers
import { Controllers } from './controllers';
import { Services } from './services';

import TypeOrmModules from '@modules/works/typeorm';
import { ModuleMember } from '@modules/members/member.module';
import { EntityAreaExpertise } from './typeorm/entities/areaExpertise.entity';

@Module({
  imports: [TypeOrmModules, ModuleMember],
  controllers: [...Controllers],
  providers: [...Services],
  exports: [EntityAreaExpertise],
})
export class ModuleWorks {}

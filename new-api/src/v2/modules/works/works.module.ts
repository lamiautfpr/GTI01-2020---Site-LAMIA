import { Module } from '@nestjs/common';
// Controllers
import { Controllers } from './controllers';
import { Services } from './services';
import { ModuleMember } from '@modules/members/member.module';
import TypeOrmModules from '@modules/works/typeorm';

@Module({
  imports: [TypeOrmModules, ModuleMember],
  controllers: [...Controllers],
  providers: [...Services],
})
export class ModuleWorks {}

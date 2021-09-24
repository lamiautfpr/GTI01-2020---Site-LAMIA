import { ModuleMember } from '@modules/members/member.module';
import TypeOrmModules from '@modules/works/typeorm';
import { Module } from '@nestjs/common';
import { Controllers } from './controllers';
import { Services } from './services';

@Module({
  imports: [TypeOrmModules, ModuleMember],
  controllers: [...Controllers],
  providers: [...Services],
})
export class ModuleWorks {}

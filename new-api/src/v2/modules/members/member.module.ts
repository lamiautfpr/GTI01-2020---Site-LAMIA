import { Module } from '@nestjs/common';
import Controllers from './controllers';
import Services from './services';
import TypeOrmModule from './typeorm';

@Module({
  imports: [TypeOrmModule],
  controllers: [...Controllers],
  providers: [...Services],
})
export class ModuleOfficeMember {}

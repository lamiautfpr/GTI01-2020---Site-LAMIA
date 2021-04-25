import { Module } from '@nestjs/common';
import { ControllerOfficeMember } from './controllers/officeMember.controller';
import Services from './services';
import TypeOrmModule from './typeorm';

@Module({
  imports: [TypeOrmModule],
  controllers: [ControllerOfficeMember],
  providers: [...Services],
})
export class ModuleOfficeMember {}

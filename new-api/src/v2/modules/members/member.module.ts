import { Module } from '@nestjs/common';
import { ControllerOfficeMember } from './controllers/officeMember.controller';
import { ServiceOfficeMember } from './services/officeMember.service';
import TypeOrmModule from './typeorm';

@Module({
  imports: [TypeOrmModule],
  controllers: [ControllerOfficeMember],
  providers: [ServiceOfficeMember],
})
export class ModuleOfficeMember {}

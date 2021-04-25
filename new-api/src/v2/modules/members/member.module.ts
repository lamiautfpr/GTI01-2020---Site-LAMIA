import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllerOfficeMember } from './controllers/officeMember.controller';
import { ServiceOfficeMember } from './services/officeMember.service';
import Entities from './typeorm/entities';
import { RepositoryOfficeMember } from './typeorm/repositories/officeMember.repository';

@Module({
  imports: [TypeOrmModule.forFeature([...Entities, RepositoryOfficeMember])],
  controllers: [ControllerOfficeMember],
  providers: [ServiceOfficeMember],
})
export class ModuleOfficeMember {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllerOfficeMember } from './controllers/officeMember.controller';
import { ServiceOfficeMember } from './services/officeMember.service';
import { EntityOfficeMember } from './typeorm/entities/officeMember.entity';
import { RepositoryOfficeMember } from './typeorm/repositories/officeMember.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([EntityOfficeMember, RepositoryOfficeMember]),
  ],
  controllers: [ControllerOfficeMember],
  providers: [ServiceOfficeMember],
})
export class ModuleOfficeMember {}

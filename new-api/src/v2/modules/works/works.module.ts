import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityAreaExpertise } from './typeorm/entities/areaExpertise.entity';
import { RepositoryAreaExpertise } from './typeorm/repositories/areaexpertise.repository';

// Controllers
import { ControllerAreaExpertise } from './controllers/areaExpertise.controller';
import { ServiceAreaExpertise } from './services/areaExpertise.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([EntityAreaExpertise, RepositoryAreaExpertise]),
  ],

  // Realiza as rotas
  controllers: [ControllerAreaExpertise],
  providers: [ServiceAreaExpertise],
})
export class ModuleWorks {}

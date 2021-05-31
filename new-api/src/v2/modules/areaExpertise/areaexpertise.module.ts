import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityAreaExpertise } from './typeorm/entities/areaExpertise.entity';
import { RepositoryAreaExpertise } from './typeorm/repositories/areaexpertise.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([EntityAreaExpertise, RepositoryAreaExpertise]),
  ],

  // Realiza as rotas
  controllers: [],
  providers: [],
})
export class ModuleAreaExpertise {}

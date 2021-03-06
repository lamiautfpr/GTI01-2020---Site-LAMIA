import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleController } from './controllers/example.controller';
import { ExampleService } from './services/example.service';
import { ExampleEntity } from './typeorm/example.entity';
import { ExampleRepository } from './typeorm/example.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity, ExampleRepository])],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}

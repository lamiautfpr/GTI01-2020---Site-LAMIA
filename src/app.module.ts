import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { V2Module } from './v2/V2.module';
import { TerminusModule } from '@nestjs/terminus';
// import { HealthController } from './health/health.controller';
import { HealthModule } from './health/health.module';

@Module({
  imports: [ConfigModule.forRoot(), TerminusModule, HealthModule, V2Module],
  // controllers: [HealthController],
})
export class AppModule {}

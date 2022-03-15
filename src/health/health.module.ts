import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { ApiHealthIndicator } from './health.indicator';

import { HealthController } from './health.controller';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [ApiHealthIndicator],
})
export class HealthModule {
  //
}

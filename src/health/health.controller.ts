import { apiConfig } from '@config/api';
import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { ApiHealthIndicator } from './health.indicator';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private api: ApiHealthIndicator,
    private db: TypeOrmHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.api.pingCheck(`api${apiConfig.version}`),
      () => this.db.pingCheck('database'),
    ]);
  }
}

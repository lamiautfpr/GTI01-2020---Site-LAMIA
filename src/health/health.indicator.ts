import { Injectable } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';

@Injectable()
export class ApiHealthIndicator extends HealthIndicator {
  public pingCheck(key: string): Promise<HealthIndicatorResult> {
    return Promise.resolve(this.getStatus(key, true));
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { V2Module } from './v2/V2.module';

@Module({
  imports: [ConfigModule.forRoot(), V2Module],
})
export class AppModule {}

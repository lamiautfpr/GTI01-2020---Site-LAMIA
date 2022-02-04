import { Module } from '@nestjs/common';
import { DatabaseConnect } from './config/database';
import { Modules } from './modules';

@Module({
  imports: [DatabaseConnect, ...Modules],
})
export class V2Module {}

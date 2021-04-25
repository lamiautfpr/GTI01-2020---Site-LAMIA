import { Module } from '@nestjs/common';
import HashProvider from '@providers/HashProvider';
import Controllers from './controllers';
import Services from './services';
import TypeOrmModule from './typeorm';

@Module({
  imports: [TypeOrmModule],
  controllers: [...Controllers],
  providers: [...Services, HashProvider],
})
export class ModuleOfficeMember {}

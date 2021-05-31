import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import HashProvider from '@providers/HashProvider';
import Controllers from './controllers';
import Services from './services';
import Strategies from './strategies';
import TypeOrmModule from './typeorm';

@Module({
  imports: [TypeOrmModule, PassportModule],
  controllers: [...Controllers],
  providers: [...Services, ...Strategies, HashProvider],
})
export class ModuleOfficeMember {}

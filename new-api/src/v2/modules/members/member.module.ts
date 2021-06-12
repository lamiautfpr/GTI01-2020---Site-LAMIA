import authConfig from '@config/auth';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import HashProvider from '@providers/HashProvider';
import Controllers from './controllers';
import Services from './services';
import Strategies from './strategies';
import TypeOrmModule from './typeorm';

const jwtConfig = JwtModule.register({
  secret: authConfig.jwt.secret,
  signOptions: { expiresIn: authConfig.jwt.expiresIn },
});

@Module({
  imports: [TypeOrmModule, PassportModule, jwtConfig],
  controllers: [...Controllers],
  providers: [...Services, ...Strategies, HashProvider],
})
export class ModuleOfficeMember {}

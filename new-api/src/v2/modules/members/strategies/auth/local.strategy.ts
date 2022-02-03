import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ERRORS_UNAUTHORIZED } from '@utils/Errors/Unauthorized';
import { Strategy } from 'passport-local';
import { ServiceAuth } from '../../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: ServiceAuth) {
    super();
  }

  async validate(username: string, password: string): Promise<EntityMember> {
    const member = await this.authService.validate({
      username,
      password,
    });

    if (!member) {
      throw new UnauthorizedException([
        ERRORS_UNAUTHORIZED.LOGIN_OR_EMAIL_INVALID,
      ]);
    }
    return member;
  }
}

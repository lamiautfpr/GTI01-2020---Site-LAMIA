import { ApiConfig } from '@config/api';
import { Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { ILoginDTO } from '../dtos/ILogin.dto';
import { IResponseLogin } from '../dtos/IResponseLogin.dto';
import { ServiceAuth } from '../services/auth.service';
import { EntityMember } from '../typeorm/entities/member.entity';

@ApiTags('Auth')
@Controller(`${ApiConfig.version}/auth`)
export class ControllerAuthMember {
  constructor(private readonly authService: ServiceAuth) {}

  @ApiBody({
    type: ILoginDTO,
  })
  @ApiOkResponse({
    description: 'successfully logged in',
    type: IResponseLogin,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UseGuards(AuthGuard('local'))
  @HttpCode(200)
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}

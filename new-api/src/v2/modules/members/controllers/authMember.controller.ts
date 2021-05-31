import { ApiConfig } from '@config/api';
import { Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { ILoginDTO } from '../dtos/ILogin.dto';
import { EntityMember } from '../typeorm/entities/member.entity';

@ApiTags('Auth')
@Controller(`${ApiConfig.version}/auth`)
export class ControllerAuthMember {
  @ApiBody({
    type: ILoginDTO,
  })
  @ApiOkResponse({
    description: 'successfully logged in',
    type: EntityMember,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UseGuards(AuthGuard('local'))
  @HttpCode(200)
  @Post('login')
  async login(@Request() req: any) {
    return req.user;
  }
}

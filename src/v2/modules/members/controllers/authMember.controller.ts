import { apiConfig } from '@config/api';
import {
  Headers,
  HttpStatus,
  Param,
  Patch,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { AllExceptionsFilter } from 'v2/utils/Interceptors/all-exceptions.filter';
import { ClassSerializerInterceptorPromise } from 'v2/utils/Interceptors/ClassSerializerInterceptorPromise';
import { ILoginDTO } from '../dtos/ILogin.dto';
import { IAuthResponse, IResponseLoginDTO } from '../dtos/IResponseLogin.dto';
import { JwtAuthGuard } from '../guard/jwtAuth.guard';
import { ServiceAuth } from '../services/auth.service';

@ApiTags('Member Authentication')
@UseFilters(new AllExceptionsFilter())
@UseInterceptors(ClassSerializerInterceptorPromise)
@Controller(`${apiConfig.version}/auth`)
export class ControllerAuthMember {
  constructor(private readonly authService: ServiceAuth) {}

  @ApiOperation({ summary: 'loginIn' })
  @ApiBody({
    type: ILoginDTO,
  })
  @ApiOkResponse({
    description: 'successfully logged in',
    type: IResponseLoginDTO,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UseGuards(AuthGuard('local'))
  @HttpCode(200)
  @Post('login')
  async login(@Request() req: any): Promise<IResponseLoginDTO> {
    return this.authService.login(req.user);
  }

  @ApiOperation({ summary: 'refreshToken' })
  @ApiOkResponse({
    description: 'successfully refreshed token',
    type: IAuthResponse,
  })
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @Put('refresh-token')
  async refreshToken(@Headers('oldToken') oldToken: string) {
    return this.authService.refreshToken(oldToken);
  }

  @ApiOperation({ summary: "reset member's password to default" })
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiForbiddenResponse(Errors.Forbidden)
  @ApiUnprocessableEntityResponse(Errors.UnprocessableEntity)
  @ApiNoContentResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Updated Success',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('reset-password/:login')
  async resetPassword(@Request() req: any, @Param('login') login: string) {
    return this.authService.resetPassword({
      loggedMemberId: req.user.userId,
      updatedMemberLogin: login,
    });
  }
}

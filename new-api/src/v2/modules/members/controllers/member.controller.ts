import { apiConfig } from '@config/api';
import uploadConfig, { AllowedImagesType } from '@config/upload';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Request,
  UploadedFile,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiConsumes,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { AllExceptionsFilter } from 'v2/utils/Interceptors/all-exceptions.filter';
import { ClassSerializerInterceptorPromise } from 'v2/utils/Interceptors/ClassSerializerInterceptorPromise';
import { ICreateMemberBasicDataDTO } from '../dtos/ICreateMember.dto';
import { ISelectOrderMemberDTO } from '../dtos/IOrderByMember.dto';
import { IParamsIdDTO } from '../dtos/IParamsId.dto';
import { IUpdateAvatarMemberBasicDataDTO } from '../dtos/IUpdateAvatarMember.dto';
import {
  IUpdateMemberBasicDataDTO,
  IUpdatePatentMemberRequestDTO,
} from '../dtos/IUpdateMember.dto';
import { JwtAuthGuard } from '../guard/jwtAuth.guard';
import { ServiceMember } from '../services/member.service';
import { EntityMember } from '../typeorm/entities/member.entity';

@ApiTags('Members')
@UseFilters(new AllExceptionsFilter())
@UseInterceptors(ClassSerializerInterceptorPromise)
@Controller(`${apiConfig.version}/members`)
export class ControllerMember {
  constructor(private readonly serviceMember: ServiceMember) {}

  @ApiOperation({ summary: 'create' })
  @ApiCreatedResponse({
    description: 'Created Success',
    type: EntityMember,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiConflictResponse(Errors.Conflict)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() data: ICreateMemberBasicDataDTO) {
    return this.serviceMember.createMember(data);
  }

  @ApiOperation({ summary: 'updateInfo' })
  @ApiOkResponse({
    description: 'Updated Success',
    type: EntityMember,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Put()
  update(@Request() req: any, @Body() data: IUpdateMemberBasicDataDTO) {
    return this.serviceMember.updateMember({
      idMember: req.user.userId,
      newMemberData: data,
    });
  }

  @ApiOperation({ summary: "update member's avatar" })
  @ApiOkResponse({
    description: 'Updated Success',
    type: EntityMember,
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        avatar: {
          type: 'string',
          format: 'binary',
          description: `Member's avatar. *Types accepted:* **${AllowedImagesType.join(
            '**; **',
          )}**`,
        },
      },
    },
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiForbiddenResponse(Errors.Forbidden)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('avatar', uploadConfig.multer))
  @Patch('/avatar')
  updateAvatar(
    @Request() req: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Body() _uploadDto: IUpdateAvatarMemberBasicDataDTO,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    return this.serviceMember.updateAvatarMember({
      idMember: req.user.userId,
      fileName: avatar.filename,
    });
  }

  @ApiOperation({ summary: "Update member's patent" })
  @ApiOkResponse({
    description: 'Updated Success',
    type: EntityMember,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiForbiddenResponse(Errors.Forbidden)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiUnauthorizedResponse(Errors.NotFound)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Patch('/:login/patent')
  updatePatent(
    @Request() req: any,
    @Body() body: IUpdatePatentMemberRequestDTO,
    @Param('login') login: string,
  ) {
    return this.serviceMember.updatePatentMember({
      loggedMemberId: req.user.userId,
      newPatentId: body.newPatentId,
      updatedMemberLogin: login,
    });
  }

  @ApiOperation({ summary: 'findAll' })
  @ApiQuery({
    type: ISelectOrderMemberDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'List of  members',
    type: EntityMember,
    isArray: true,
  })
  @ApiNoContentResponse({
    description: 'No Members Content',
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Query() order: ISelectOrderMemberDTO) {
    return this.serviceMember.findAll(order);
  }

  @ApiOperation({ summary: 'findOne' })
  @ApiResponse({
    status: 200,
    description: 'find member',
    type: EntityMember,
  })
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiNotFoundResponse(Errors.NotFound)
  @UsePipes(new ValidationPipe())
  @Get(':login')
  async findOne(@Param('login') login: string): Promise<EntityMember> {
    return this.serviceMember.findByLogin(login);
  }

  @ApiOperation({ summary: 'delete' })
  @ApiNoContentResponse({
    status: 204,
    description: 'Deleted Success',
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiForbiddenResponse(Errors.Forbidden)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @HttpCode(204)
  @Delete(':id')
  async remove(@Request() req: any, @Param() params: IParamsIdDTO) {
    await this.serviceMember.removeById({
      idMemberLogged: req.user.userId,
      idMemberToDelete: params.id,
    });
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { ApiConfig } from '../../../config/api';
import { ICreateMemberBasicDataDTO } from '../dtos/ICreateMember.dto';
import { ISelectOrderMemberDTO } from '../dtos/IOrderMember.dto';
import { IParamsIdDTO } from '../dtos/IParamsId.dto';
import {
  IUpdateMemberBasicDataDTO,
  IUpdateMemberDTO,
} from '../dtos/IUpdateMember.dto';
import { JwtAuthGuard } from '../guard/jwtAuth.guard';
import { ServiceMember } from '../services/member.service';
import { EntityMember } from '../typeorm/entities/member.entity';

@ApiTags('members')
@Controller(`${ApiConfig.version}/members`)
export class ControllerMember {
  constructor(private readonly serviceMember: ServiceMember) {}

  @ApiCreatedResponse({
    description: 'Created Success',
    type: EntityMember,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiConflictResponse(Errors.Conflict)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() data: ICreateMemberBasicDataDTO) {
    return this.serviceMember.createMember(data);
  }

  @ApiOkResponse({
    description: 'Updated Success',
    type: EntityMember,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Put()
  update(@Request() req: any, @Body() data: IUpdateMemberBasicDataDTO) {
    return this.serviceMember.updateMember({
      idMember: req.user.userId,
      newMemberData: data,
    });
  }

  @ApiQuery({
    type: ISelectOrderMemberDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'List of  members',
    type: EntityMember,
    isArray: true,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Query() order: ISelectOrderMemberDTO) {
    return this.serviceMember.findAll(order);
  }

  @ApiResponse({
    status: 200,
    description: 'find member',
    type: EntityMember,
  })
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiNotFoundResponse(Errors.NotFound)
  @UsePipes(new ValidationPipe())
  @Get(':login')
  findOne(@Param('login') login: string) {
    return this.serviceMember.findByLogin(login);
  }

  @ApiNoContentResponse({
    status: 204,
    description: 'Deleted Success',
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(204)
  @Delete(':id')
  async remove(@Param() params: IParamsIdDTO) {
    await this.serviceMember.removeById(params.id);
  }
}

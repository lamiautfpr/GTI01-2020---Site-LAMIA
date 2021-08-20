import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { apiConfig } from '../../../config/api';
import ICreatePatentDTO from '../dtos/Patent/ICreatePatent.dto';
import { ISelectOrderPatentDTO } from '../dtos/Patent/IOrderPatent.dto';
import { JwtAuthGuard } from '../guard/jwtAuth.guard';
import { ServiceOfficeMember } from '../services/officeMember.service';
import { EntityPatent } from '../typeorm/entities/patent.entity';

@ApiTags('offices')
@Controller(`${apiConfig.version}/offices/members`)
export class ControllerOfficeMember {
  constructor(private readonly serviceOfficeMember: ServiceOfficeMember) {}

  @ApiOperation({ summary: 'create' })
  @ApiCreatedResponse({
    description: 'Created Success',
    type: EntityPatent,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiConflictResponse(Errors.Conflict)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() data: ICreatePatentDTO) {
    return this.serviceOfficeMember.createOfficeMember(data);
  }

  @ApiOperation({ summary: 'findAll' })
  @ApiQuery({
    type: ISelectOrderPatentDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'List of office members',
    type: EntityPatent,
    isArray: true,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Query() order: ISelectOrderPatentDTO) {
    return this.serviceOfficeMember.findAll(order);
  }
}

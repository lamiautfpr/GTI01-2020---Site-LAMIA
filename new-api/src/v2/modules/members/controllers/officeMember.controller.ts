import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { ApiConfig } from '../../../config/api';
import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import { ServiceOfficeMember } from '../services/officeMember.service';
import { EntityOfficeMember } from '../typeorm/officeMember.entity';

@ApiTags('offices')
@Controller(`${ApiConfig.version}/members/offices`)
export class ControllerOfficeMember {
  constructor(private readonly serviceOfficeMember: ServiceOfficeMember) {}

  @ApiCreatedResponse({
    description: 'Created Success',
    type: EntityOfficeMember,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiConflictResponse(Errors.Conflict)
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() data: ICreateOfficeMemberDTO) {
    return this.serviceOfficeMember.createOfficeMember(data);
  }

  @ApiResponse({
    status: 200,
    description: 'List of office members',
    type: EntityOfficeMember,
    isArray: true,
  })
  @Get()
  findAll(): any {
    return this.serviceOfficeMember.findAll();
  }
}

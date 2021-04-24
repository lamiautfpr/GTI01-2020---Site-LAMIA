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
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: Errors.BadRequest,
  })
  @ApiConflictResponse({
    description: 'Conflict - Exists data',
    type: Errors.Conflict,
  })
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() data: ICreateOfficeMemberDTO) {
    return this.serviceOfficeMember.createOfficeMember(data);
  }

  @Get()
  getTeste(): any {
    return this.serviceOfficeMember.findAll();
  }
}

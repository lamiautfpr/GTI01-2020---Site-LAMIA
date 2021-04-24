import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ApiConfig } from '../../../config/api';
import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import { ServiceOfficeMember } from '../services/officeMember.service';
import { EntityOfficeMember } from '../typeorm/officeMember.entity';

@ApiTags('offices')
@Controller(`${ApiConfig.version}/members/offices`)
export class ControllerOfficeMember {
  constructor(private readonly serviceOfficeMember: ServiceOfficeMember) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Created Success',
    type: EntityOfficeMember,
  })
  create(@Body() data: ICreateOfficeMemberDTO) {
    try {
      return this.serviceOfficeMember.createOfficeMember(data);
    } catch (error) {
      return { error };
    }
  }

  @Get()
  getTeste(): any {
    return this.serviceOfficeMember.findAll();
  }
}

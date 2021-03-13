import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiConfig } from '../../../config/api';
import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import { ServiceOfficeMember } from '../services/officeMember.service';

@Controller(`${ApiConfig.version}/members/offices`)
export class ControllerOfficeMember {
  constructor(private readonly serviceOfficeMember: ServiceOfficeMember) {}

  @Post()
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

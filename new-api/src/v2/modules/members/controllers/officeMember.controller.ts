import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiConfig } from '../../../config/api';
import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import { ServiceOfficeMember } from '../services/officeMember.service';

@Controller(`${ApiConfig.version}/members/offices`)
export class ControllerOfficeMember {
  constructor(private readonly serviceOfficeMember: ServiceOfficeMember) {}

  // @Post()
  // create(@Body() createExampleDTO: ICreateExampleDTO) {
  //   try {
  //     return this.exampleService.createExample(createExampleDTO);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // @Get()
  // getTeste(): any {
  //   return this.exampleService.findAll();
  // }
}

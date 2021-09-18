import { apiConfig } from '@config/api';
import { JwtAuthGuard } from '@modules/members/guard/jwtAuth.guard';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
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
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import ICreateAreaExpertiseBasicDTO from '../dtos/areaExpertise/ICreateAreaExpertise.dto';
import { ISelectOrderAreaExpertiseDTO } from '../dtos/areaExpertise/IOrderAreaExpertise.dto';
import { ServiceAreaExpertise } from '../services/areaExpertise.service';
import { EntityAreaExpertise } from '../typeorm/entities/areaExpertise.entity';

@ApiTags('Areas Expertise')
@Controller(`${apiConfig.version}/works/areas-expertise`)
export class ControllerAreaExpertise {
  constructor(private readonly serviceAreaExpertise: ServiceAreaExpertise) {}

  @ApiCreatedResponse({
    description: 'Created Success',
    type: EntityAreaExpertise,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiConflictResponse(Errors.Conflict)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: ICreateAreaExpertiseBasicDTO, @Req() request: any) {
    return this.serviceAreaExpertise.createAreaExpertise({
      areaExpertise: data,
      idMember: request.user.userId,
    });
  }

  @ApiQuery({
    type: ISelectOrderAreaExpertiseDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'List of Area(s) Expertise(s)',
    type: EntityAreaExpertise,
    isArray: true,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Query() order: ISelectOrderAreaExpertiseDTO) {
    return this.serviceAreaExpertise.findAll(order);
  }
}

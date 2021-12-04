import { apiConfig } from '@config/api';
import { JwtAuthGuard } from '@modules/members/guard/jwtAuth.guard';
import { ISelectOrderDTO } from '@modules/shared/dtos/IOrderBy.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { AllExceptionsFilter } from 'v2/utils/Interceptors/all-exceptions.filter';
import { ClassSerializerInterceptorPromise } from 'v2/utils/Interceptors/ClassSerializerInterceptorPromise';
import ICreateAreaExpertiseBasicDTO from '../dtos/areaExpertise/ICreateAreaExpertise.dto';
import { ServiceAreaExpertise } from '../services/areaExpertise.service';
import { EntityAreaExpertise } from '../typeorm/entities/areaExpertise.entity';

@ApiTags('Expertise Areas')
@UseFilters(new AllExceptionsFilter())
@UseInterceptors(ClassSerializerInterceptorPromise)
@Controller(`${apiConfig.version}/works/areas-expertise`)
export class ControllerAreaExpertise {
  constructor(private readonly serviceAreaExpertise: ServiceAreaExpertise) {}

  @ApiOperation({ summary: 'Create Expertise Areas' })
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
      newExpertiseAreaData: data,
      idMember: request.user.userId,
    });
  }
  @ApiOperation({ summary: 'Create Expertise Areas' })
  @ApiQuery({
    type: ISelectOrderDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'List of Area(s) Expertise(s)',
    type: EntityAreaExpertise,
    isArray: true,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNoContentResponse({
    description: 'No Expertise Areas Content',
  })
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Query() order: ISelectOrderDTO) {
    return this.serviceAreaExpertise.findAll(order);
  }
}

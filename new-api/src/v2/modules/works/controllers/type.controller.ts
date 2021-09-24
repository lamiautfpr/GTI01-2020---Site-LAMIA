import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiNoContentResponse,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

// Service
import { ServiceType } from '../services/type.service';

// Entity
import { EntityType } from '../typeorm/entities/type.entity';

// Erros
import Errors from 'v2/utils/Errors';
import ICreateTypeDTO from '../dtos/type/ICreateType.dto';
import { ISelectOrderTypeDTO } from '../dtos/type/IOrderType.dto';
import { apiConfig } from '@config/api';

@ApiTags('Types')
@Controller(`${apiConfig.version}/works/types`)
export class ControllerAreaExpertise {
  constructor(private readonly serviceType: ServiceType) {}

  @ApiCreatedResponse({
    description: 'Created Success',
    type: EntityType,
  })
  //Tira duvidas
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiConflictResponse(Errors.Conflict)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() data: ICreateTypeDTO) {
    return this.serviceType.createType(data);
  }

  @ApiQuery({
    type: ISelectOrderTypeDTO,
  })
  @ApiNoContentResponse({
    description: 'Type not exists',
  })
  @ApiResponse({
    status: 200,
    description: 'List of Type(s)',
    type: EntityType,
    isArray: true,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Query() order: ISelectOrderTypeDTO) {
    return this.serviceType.findAll(order);
  }
}

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
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { AllExceptionsFilter } from 'v2/utils/Interceptors/all-exceptions.filter';
import { ClassSerializerInterceptorPromise } from 'v2/utils/Interceptors/ClassSerializerInterceptorPromise';
import ICreateTypeDTO from '../dtos/type/ICreateType.dto';
import { ServiceType } from '../services/type.service';
import { EntityType } from '../typeorm/entities/type.entity';

@ApiTags("Works's Types")
@UseFilters(new AllExceptionsFilter())
@UseInterceptors(ClassSerializerInterceptorPromise)
@Controller(`${apiConfig.version}/works/types`)
export class ControllerType {
  constructor(private readonly serviceType: ServiceType) {}

  @ApiOperation({ summary: "Create Works's Types" })
  @ApiCreatedResponse({
    description: 'Created Success',
    type: EntityType,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiConflictResponse(Errors.Conflict)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiForbiddenResponse(Errors.Forbidden)
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Post()
  create(@Body() data: ICreateTypeDTO, @Req() request: any) {
    return this.serviceType.createType({
      newTypeData: data,
      idMember: request.user.userId,
    });
  }

  @ApiOperation({ summary: "Find all Works's Types" })
  @ApiQuery({
    type: ISelectOrderDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'List of patents',
    type: EntityType,
    isArray: true,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNoContentResponse({
    description: 'No Types Content',
  })
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Query() order: ISelectOrderDTO) {
    return this.serviceType.findAll(order);
  }
}

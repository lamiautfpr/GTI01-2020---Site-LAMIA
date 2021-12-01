import { apiConfig } from '@config/api';
import { JwtAuthGuard } from '@modules/members/guard/jwtAuth.guard';
import {
  Body,
  Controller,
  Get,
  Param,
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
  ApiNotFoundResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { AllExceptionsFilter } from 'v2/utils/Interceptors/all-exceptions.filter';
import { ClassSerializerInterceptorPromise } from 'v2/utils/Interceptors/ClassSerializerInterceptorPromise';
import ICreateWorkBasicDTO from '../dtos/work/ICreateWork.dto';
import { ISelectOrderWorkDTO } from '../dtos/work/IOrderWork.dto';
import { ServiceWork } from '../services/work.service';
import { EntityWork } from '../typeorm/entities/work.entity';

@ApiTags('Works')
@UseFilters(new AllExceptionsFilter())
@UseInterceptors(ClassSerializerInterceptorPromise)
@Controller(`${apiConfig.version}/works`)
export class ControllerWork {
  constructor(private readonly serviceWork: ServiceWork) {}

  @ApiOperation({ summary: 'Create Works' })
  @ApiCreatedResponse({
    description: 'Created Success',
    type: EntityWork,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiConflictResponse(Errors.Conflict)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiForbiddenResponse(Errors.Forbidden)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() data: ICreateWorkBasicDTO, @Req() request: any) {
    return this.serviceWork.createWork({
      newWorkData: data,
      idMember: request.user.userId,
    });
  }

  @ApiOperation({ summary: 'Find all Works' })
  @ApiQuery({
    type: ISelectOrderWorkDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'List of works',
    type: EntityWork,
    isArray: true,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNoContentResponse({
    description: 'No Work Content',
  })
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Query() order: ISelectOrderWorkDTO) {
    return { test: true, order };
  }

  @ApiOperation({ summary: 'find one Work by SLUG' })
  @ApiResponse({
    status: 200,
    description: 'find especific work',
    type: '',
  })
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiNotFoundResponse(Errors.NotFound)
  @UsePipes(new ValidationPipe())
  @Get(':slug')
  async findOneBySlug(@Param('slug') slug: string) {
    return this.serviceWork.findBySlug(slug);
  }
}

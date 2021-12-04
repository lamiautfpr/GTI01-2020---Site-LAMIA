import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
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
import { apiConfig } from '../../../config/api';
import { ISelectOrderDTO } from '../../shared/dtos/IOrderBy.dto';
import ICreatePatentBasicDataDTO from '../dtos/Patent/ICreatePatent.dto';
import IFindPatentByNameDTO from '../dtos/Patent/IFindPatentByName.dto';
import { JwtAuthGuard } from '../guard/jwtAuth.guard';
import { ServicePatent } from '../services/patent.service';
import { EntityPatent } from '../typeorm/entities/patent.entity';

@ApiTags("Members's Patents")
@UseFilters(new AllExceptionsFilter())
@UseInterceptors(ClassSerializerInterceptorPromise)
@Controller(`${apiConfig.version}/members/patents`)
export class ControllerPatent {
  constructor(private readonly servicePatent: ServicePatent) {}

  @ApiOperation({ summary: "Create Members's Patents" })
  @ApiCreatedResponse({
    description: 'Created Success',
    type: EntityPatent,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiConflictResponse(Errors.Conflict)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @ApiUnauthorizedResponse(Errors.Unauthorized)
  @ApiForbiddenResponse(Errors.Forbidden)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Request() req: any, @Body() data: ICreatePatentBasicDataDTO) {
    return this.servicePatent.createPatent({
      newPatentData: data,
      idMember: req.user.userId,
    });
  }

  @ApiOperation({ summary: "Find all Members's Patents" })
  @ApiQuery({
    type: ISelectOrderDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'List of patents',
    type: EntityPatent,
    isArray: true,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNoContentResponse({
    description: 'No Categories Content',
  })
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Query() order: ISelectOrderDTO) {
    return this.servicePatent.findAll(order);
  }

  @ApiOperation({ summary: "Find Mmembers's Patent By name" })
  @ApiResponse({
    status: 200,
    description: 'Found patent and its members',
    type: EntityPatent,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get(':name')
  findOneByName(@Param() params: IFindPatentByNameDTO) {
    return this.servicePatent.findOneByName(params.name);
  }
}

import { apiConfig } from '@config/api';
import { JwtAuthGuard } from '@modules/members/guard/jwtAuth.guard';
import {
  Body,
  Controller,
  Post,
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
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import ICreateTypeDTO from '../dtos/type/ICreateType.dto';
import { ServiceType } from '../services/type.service';
import { EntityType } from '../typeorm/entities/type.entity';

@ApiTags('Works')
@Controller(`${apiConfig.version}/works`)
export class ControllerType {
  constructor(private readonly serviceType: ServiceType) {}

  @ApiOperation({ summary: 'Create Works' })
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
  create(@Body() data: ICreateTypeDTO, @Req() request: any) {}

  // @ApiOperation({ summary: 'Find all Works' })
  // @ApiQuery({
  //   type: ISelectOrderTypeDTO,
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'List of patents',
  //   type: EntityType,
  //   isArray: true,
  // })
  // @ApiBadRequestResponse(Errors.BadRequest)
  // @ApiNoContentResponse({
  //   description: 'No Types Content',
  // })
  // @ApiInternalServerErrorResponse(Errors.InternalServer)
  // @UsePipes(new ValidationPipe())
  // @Get()
  // findAll(@Query() order: ISelectOrderTypeDTO) {}

  // @ApiOperation({ summary: 'findOne' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'find especific work',
  //   type: '',
  // })
  // @ApiInternalServerErrorResponse(Errors.InternalServer)
  // @ApiNotFoundResponse(Errors.NotFound)
  // @UsePipes(new ValidationPipe())
  // @Get(':slug')
  // async findOne(@Param('slug') slug: string): Promise<any> {}
}

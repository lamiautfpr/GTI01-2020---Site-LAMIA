import { JwtAuthGuard } from '@modules/members/guard/jwtAuth.guard';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';

// Service
import { ServiceType } from '../services/type.service';

// Entity
import { EntityType } from '../typeorm/entities/type.entity';

// Erros
import Errors from 'v2/utils/Errors';
import ICreateTypeDTO from '../dtos/type/ICreateType.dto';
import { apiConfig } from '@config/api';

@ApiTags('Types')
@Controller(`${apiConfig.version}/works/types`)
export class ControllerType {
  constructor(private readonly serviceType: ServiceType) {}

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
  create(@Body() data: ICreateTypeDTO) {
    return this.serviceType.createType(data);
  }
}

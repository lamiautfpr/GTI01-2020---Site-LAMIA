import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
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
  ApiNoContentResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { apiConfig } from '../../../config/api';
import ICreatePatentBasicDataDTO from '../dtos/Patent/ICreatePatent.dto';
import { ISelectOrderPatentDTO } from '../dtos/Patent/IOrderPatent.dto';
import { JwtAuthGuard } from '../guard/jwtAuth.guard';
import { ServicePatent } from '../services/patent.service';
import { EntityPatent } from '../typeorm/entities/patent.entity';

@ApiTags("Members's Patents")
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
    type: ISelectOrderPatentDTO,
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
  findAll(@Query() order: ISelectOrderPatentDTO) {
    return this.servicePatent.findAll(order);
  }
}

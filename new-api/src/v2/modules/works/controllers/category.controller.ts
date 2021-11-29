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
import ICreateCategoryBasicDTO from '../dtos/category/ICreateCategory.dto';
import { ISelectOrderCategoryDTO } from '../dtos/category/IOrderCategory.dto';
import { ServiceCategory } from '../services/category.service';
import { EntityCategory } from '../typeorm/entities/category.entity';

@ApiTags("Works's Categories")
@Controller(`${apiConfig.version}/works/categories`)
export class ControllerCategory {
  constructor(private readonly ServiceCategory: ServiceCategory) {}

  @ApiOperation({ summary: "Create Works's Categories" })
  @ApiCreatedResponse({
    description: 'Created success',
    type: EntityCategory,
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
  create(@Body() data: ICreateCategoryBasicDTO, @Req() request: any) {
    return this.ServiceCategory.createCategory({
      newCategoryData: data,
      idMember: request.user.userId,
    });
  }

  @ApiOperation({ summary: "Find all Works's Categories" })
  @ApiQuery({
    type: ISelectOrderCategoryDTO,
  })
  @ApiNoContentResponse({
    description: 'No Categories Content',
  })
  @ApiResponse({
    status: 200,
    description: 'List of Categories',
    type: EntityCategory,
    isArray: true,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Query() order: ISelectOrderCategoryDTO) {
    return this.ServiceCategory.findAll(order);
  }
}

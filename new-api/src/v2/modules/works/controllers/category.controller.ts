import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { apiConfig } from '../../../config/api';
import ICreateCategoryDTO from '../dtos/category/ICreateCategory.dto';
import { ISelectOrderCategoryDTO } from '../dtos/category/IOrderCategory.dto';
import { EntityCategory } from '../typeorm/entities/category.entity';
import { ServiceCategory } from '../services/category.service';

@ApiTags('category')
@Controller(`${apiConfig.version}/works/categories`)
export class ControllerCategory {
  constructor(private readonly ServiceCategory: ServiceCategory) {}

  @ApiCreatedResponse({
    description: 'Create success',
    type: EntityCategory,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() data: ICreateCategoryDTO) {
    return this.ServiceCategory.createCategory(data);
  }

  @ApiQuery({
    type: ISelectOrderCategoryDTO,
  })
  @ApiNoContentResponse({
    description: 'Category not exists',
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

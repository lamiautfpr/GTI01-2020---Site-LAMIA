import { JwtAuthGuard } from '@modules/members/guard/jwtAuth.guard';
import { ISelectOrderDTO } from '@modules/shared/dtos/IOrderBy.dto';
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
import { apiConfig } from '../../../config/api';
import ICreateCategoryBasicDTO from '../dtos/category/ICreateCategory.dto';
import IFindOneCategoryByName from '../dtos/category/IFindOneCategoryByName.dto';
import { ServiceCategory } from '../services/category.service';
import { EntityCategory } from '../typeorm/entities/category.entity';

@ApiTags("Works's Categories")
@UseFilters(new AllExceptionsFilter())
@UseInterceptors(ClassSerializerInterceptorPromise)
@Controller(`${apiConfig.version}/works/categories`)
export class ControllerCategory {
  constructor(private readonly serviceCategory: ServiceCategory) {}

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
    return this.serviceCategory.createCategory({
      newCategoryData: data,
      idMember: request.user.userId,
    });
  }

  @ApiOperation({ summary: "Find all Works's Categories" })
  @ApiQuery({
    type: ISelectOrderDTO,
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
  findAll(@Query() order: ISelectOrderDTO) {
    return this.serviceCategory.findAll(order);
  }

  @ApiOperation({ summary: "Find works's categories by name" })
  @ApiResponse({
    status: 200,
    description: 'Found patent and its members',
    type: EntityCategory,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiNotFoundResponse(Errors.NotFound)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get(':name')
  findOneByName(@Param() params: IFindOneCategoryByName) {
    return this.serviceCategory.findOneByName(params.name);
  }
}

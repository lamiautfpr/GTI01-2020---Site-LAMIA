import { EntityWork } from '@modules/works/typeorm/entities/work.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsInt, IsOptional, IsPositive } from 'class-validator';

export default class IPaginationWorkDTO {
  @ApiProperty({
    type: 'integer',
    description: 'The page number that will return',
    example: 1,
    default: 1,
    minimum: 1,
  })
  @IsInt()
  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  page: number;

  @ApiProperty({
    type: 'integer',
    description: 'Quantity items that witll return per page',
    example: 3,
    default: 3,
    minimum: 3,
  })
  @IsInt()
  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  perPage: number;
}

export class IPaginationDTO {
  @IsInt()
  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  skip: number;

  @IsInt()
  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  take: number;
}

export class IPaginationReponseDTO {
  @ApiProperty({
    type: 'integer',
    description: 'The page number that returned',
    example: 2,
  })
  @IsInt()
  @Type(() => Number)
  @IsPositive()
  @IsDefined()
  currentPage: number;

  @ApiProperty({
    type: 'integer',
    description:
      'Quantity page that exists with this setting. The first page number is 1 and the last page number is totalPages',
    example: 4,
  })
  @IsInt()
  @Type(() => Number)
  @IsPositive()
  @IsDefined()
  totalPages: number;

  @ApiProperty({
    type: 'integer',
    description: 'Quantity items registred',
    example: 20,
  })
  @IsInt()
  @Type(() => Number)
  @IsPositive()
  @IsDefined()
  totalItems: number;

  @ApiProperty({
    type: 'integer',
    description: 'Quantity items that returned per page',
    example: 20,
  })
  @IsInt()
  @Type(() => Number)
  @IsPositive()
  @IsDefined()
  itemsPerPage: number;

  @ApiProperty({
    type: 'integer',
    description: 'Quantity items that returned on current page',
    example: 17,
  })
  @IsInt()
  @Type(() => Number)
  @IsPositive()
  @IsDefined()
  totalItemsCurrentPage: number;
}

export class IPaginationWorkReponseDTO {
  @ApiProperty({
    type: IPaginationReponseDTO,
    description: 'Pagination info',
  })
  @IsDefined()
  pagination: IPaginationReponseDTO;

  @ApiProperty({
    type: EntityWork,
    description: 'List of works in this page',
    isArray: true,
  })
  @IsDefined()
  works: EntityWork[];
}

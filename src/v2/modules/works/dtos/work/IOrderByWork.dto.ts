import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EntityWork } from '../../typeorm/entities/work.entity';
import IPaginationWorkDTO from './IPaginationWork.dto';

type IDirection = 'ASC' | 'DESC';

type IOrderByWork = {
  [K in keyof EntityWork]?: IDirection;
};

const orderByWorkEnum = [
  'title',
  'internalCode',
  'slug',
  'startDate',
  'endDate',
  'createAt',
];
const DirectionsOrderWork = ['ASC', 'DESC'];

export class ISelectOrderWorkDTO extends IPaginationWorkDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(orderByWorkEnum)
  @ApiProperty({
    type: String,
    required: false,
    description: 'Attribute that will be ordered',
    enum: orderByWorkEnum,
    default: orderByWorkEnum[0],
  })
  orderBy?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(DirectionsOrderWork)
  @ApiProperty({
    type: String,
    required: false,
    description:
      'Direction of the listing, whether it is increasing or decreasing',
    enum: DirectionsOrderWork,
    default: 'ASC',
  })
  direction?: IDirection;
}

export default IOrderByWork;

import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';

type IDirection = 'ASC' | 'DESC';
type IOrderBy = 'name' | 'createAt';

type IOrderByDTO<T> = {
  [K in keyof T]?: IDirection;
};

const orderByEnum = ['name', 'createAt'];
const DirectionsOrderEum = ['ASC', 'DESC'];

export class ISelectOrderDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(orderByEnum)
  @ApiProperty({
    type: String,
    required: false,
    description: 'Attribute that will be ordered',
    enum: orderByEnum,
    default: 'name',
  })
  orderBy?: IOrderBy;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(DirectionsOrderEum)
  @ApiProperty({
    type: String,
    required: false,
    description:
      'Direction of the listing, whether it is increasing or decreasing',
    enum: DirectionsOrderEum,
    default: 'ASC',
  })
  direction?: IDirection;
}

export default IOrderByDTO;

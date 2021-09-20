import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EntityType } from '../../typeorm/entities/type.entity';

type IDirection = 'ASC' | 'DESC';
type IAttributes = 'name' | 'createdAt';

type IOrderTypeDTO = {
  [K in keyof EntityType]?: IDirection;
};

const AttributesOrderType = ['name', 'createAt'];
const DirectionsOrderType = ['ASC', 'DESC'];

export class ISelectOrderTypeDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(AttributesOrderType)
  @ApiProperty({
    type: String,
    required: false,
    description: 'Attribute that will be ordered',
    enum: AttributesOrderType,
    default: 'name',
  })
  attribute?: IAttributes;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(DirectionsOrderType)
  @ApiProperty({
    type: String,
    required: false,
    description:
      'Direction of the listing, whether it is increasing or decreasing',
    enum: DirectionsOrderType,
    default: 'ASC',
  })
  direction?: IDirection;
}

export default IOrderTypeDTO;

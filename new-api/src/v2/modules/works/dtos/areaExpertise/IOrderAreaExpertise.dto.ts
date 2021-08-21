import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EntityAreaExpertise } from '../../typeorm/entities/areaExpertise.entity';

type IDirection = 'ASC' | 'DESC';
type IAttributes = 'name' | 'createdAt';

type IOrderAreaExpertiseDTO = {
  [K in keyof EntityAreaExpertise]?: IDirection;
};

const AttributesOrderAreaExpertise = ['name', 'createAt'];
const DirectionsOrderAreaExpertise = ['ASC', 'DESC'];

export class ISelectOrderAreaExpertiseDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(AttributesOrderAreaExpertise)
  @ApiProperty({
    type: String,
    required: false,
    description: 'Attribute that will be ordered',
    enum: AttributesOrderAreaExpertise,
    default: 'name',
  })
  attribute?: IAttributes;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(DirectionsOrderAreaExpertise)
  @ApiProperty({
    type: String,
    required: false,
    description:
      'Direction of the listing, whether it is increasing or decreasing',
    enum: DirectionsOrderAreaExpertise,
    default: 'ASC',
  })
  direction?: IDirection;
}

export default IOrderAreaExpertiseDTO;

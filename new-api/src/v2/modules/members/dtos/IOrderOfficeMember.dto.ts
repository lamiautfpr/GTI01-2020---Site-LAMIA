import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EntityOfficeMember } from '../typeorm/officeMember.entity';

type IDirection = 'ASC' | 'DESC';
type IAttributes = 'name' | 'createAt';

type IOrderOfficeMemberDTO = {
  [K in keyof EntityOfficeMember]?: IDirection;
};

const AttributesOrderOfficeMemberEum = ['name', 'createAt'];
const DirectionsOrderOfficeMemberEum = ['ASC', 'DESC'];

export class ISelectOrderOfficeMemberDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(AttributesOrderOfficeMemberEum)
  @ApiProperty({
    type: String,
    required: false,
    description: 'Attribute that will be ordered',
    enum: AttributesOrderOfficeMemberEum,
    default: 'name',
  })
  attribute?: IAttributes;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(DirectionsOrderOfficeMemberEum)
  @ApiProperty({
    type: String,
    required: false,
    description:
      'Direction of the listing, whether it is increasing or decreasing',
    enum: DirectionsOrderOfficeMemberEum,
    default: 'ASC',
  })
  direction?: IDirection;
}

export default IOrderOfficeMemberDTO;

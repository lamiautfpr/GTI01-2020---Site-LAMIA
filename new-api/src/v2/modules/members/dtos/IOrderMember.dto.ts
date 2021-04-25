import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EntityMember } from '../typeorm/entities/member.entity';

type IDirection = 'ASC' | 'DESC';

type IOrderMember = {
  [K in keyof EntityMember]?: IDirection;
};

const AttributesOrderMemberEum = Object.keys(EntityMember);
const DirectionsOrderMemberEum = ['ASC', 'DESC'];

export class ISelectOrderMemberDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(AttributesOrderMemberEum)
  @ApiProperty({
    type: String,
    required: false,
    description: 'Attribute that will be ordered',
    enum: AttributesOrderMemberEum,
    default: 'name',
  })
  attribute?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(DirectionsOrderMemberEum)
  @ApiProperty({
    type: String,
    required: false,
    description:
      'Direction of the listing, whether it is increasing or decreasing',
    enum: DirectionsOrderMemberEum,
    default: 'ASC',
  })
  direction?: IDirection;
}

export default IOrderMember;

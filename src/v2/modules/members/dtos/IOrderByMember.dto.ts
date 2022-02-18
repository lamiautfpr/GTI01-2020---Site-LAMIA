import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EntityMember } from '../typeorm/entities/member.entity';

type IDirection = 'ASC' | 'DESC';

type IOrderByMember = {
  [K in keyof EntityMember]?: IDirection;
};

const orderByMemberEnum = [
  'name',
  'email',
  'login',
  'patent',
  'quoteName',
  'createAt',
];
const DirectionsOrderMemberEnum = ['ASC', 'DESC'];

export class ISelectOrderMemberDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(orderByMemberEnum)
  @ApiProperty({
    type: String,
    required: false,
    description: 'Attribute that will be ordered',
    enum: orderByMemberEnum,
    default: 'name',
  })
  orderBy?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(DirectionsOrderMemberEnum)
  @ApiProperty({
    type: String,
    required: false,
    description:
      'Direction of the listing, whether it is increasing or decreasing',
    enum: DirectionsOrderMemberEnum,
    default: 'ASC',
  })
  direction?: IDirection;
}

export default IOrderByMember;

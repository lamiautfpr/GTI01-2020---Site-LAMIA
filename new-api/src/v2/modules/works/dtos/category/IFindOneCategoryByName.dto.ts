import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export default class IFindOneCategoryByName {
  @ApiProperty({
    type: String,
    nullable: false,
    description: "Category's name",
    example: 'Produto',
  })
  @IsString()
  @IsDefined()
  name?: string;
}

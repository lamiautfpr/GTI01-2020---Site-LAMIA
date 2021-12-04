import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export default class IFindPatentByNameDTO {
  @ApiProperty({
    type: String,
    nullable: false,
    description: "Patent's name",
    example: 'Orientador',
  })
  @IsString()
  @IsDefined()
  name?: string;
}

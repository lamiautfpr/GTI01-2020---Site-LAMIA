import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export default class ICreateAreaExpertiseDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: 'Name of area Expetise',
    example: 'Novato',
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Description of area expertise',
    example: 'The studant is novato',
  })
  description?: string;
}

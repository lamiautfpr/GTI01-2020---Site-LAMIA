import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export default class ICreateAreaExpertiseDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: 'Name of Area Expetise',
    example: 'Ciência de Dados',
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Description of Area expertise',
    example: 'Ciência de Dados é...',
  })
  description?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export default class ICreateAreaExpertiseDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: 'Name of Area Expertise',
    example: 'Ciência de Dados',
    required: true,
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Description of Area Expertise',
    example: 'Ciência de Dados é...',
    required: false,
  })
  description?: string;
}

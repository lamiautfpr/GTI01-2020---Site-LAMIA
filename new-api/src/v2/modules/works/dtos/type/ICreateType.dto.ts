import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export default class ICreateTypeDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({
    description: 'Name of Type',
    example: 'Pesquisa Científica',
    required: true,
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Description of Type',
    example: 'Pesquisa Científica é...',
    required: false,
  })
  description?: string;
}

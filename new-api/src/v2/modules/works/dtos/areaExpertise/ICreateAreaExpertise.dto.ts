import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export default class ICreateAreaExpertiseBasicDTO {
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

export class ICreateAreaExpertiseDTO {
  @IsDefined()
  areaExpertise: ICreateAreaExpertiseBasicDTO;

  @IsDefined()
  @IsUUID()
  idMember: string;
}

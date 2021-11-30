import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';

class ValidationRaletion {
  @ApiProperty({
    type: 'string',
    description: 'UUID of the relation',
    example: '6841a496-3854-458e-b177-1e17fb287b3f',
  })
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  id: string;
}

export default class ICreateWorkBasicDTO {
  @ApiProperty({
    description: "Work's intenal code",
    example: 'IC01/2019',
    uniqueItems: true,
    nullable: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MaxLength(255)
  internalCode: string;

  @ApiProperty({
    description: "Work's title",
    example: 'Dashboard Covid Paraná',
    maxLength: 255,
  })
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MaxLength(255)
  title: string;

  @ApiProperty({
    description: "Work's URL",
    example: 'Dashboard Covid Paraná',
    uniqueItems: true,
    maxLength: 255,
  })
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MaxLength(255)
  slug: string;

  @ApiProperty({
    description:
      "Work's objective. **OBS:** When the objective is null, the work is not visible",
    example:
      'Para apresentar a evoluçãod dados da pandemia do Covid foi desenvolvido um dashboard utilizando analise de dados.',
    nullable: true,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  objective?: string;

  @ApiProperty({
    description: "Work's Github URL",
    example: 'https://github.com/lamiautfpr/GTI01-2020---Site-LAMIA',
    uniqueItems: true,
    maxLength: 255,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()
  @MaxLength(255)
  github?: string;

  @ApiProperty({
    description: "Work's start date",
    example: '2010-10-10T00:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  @IsDefined()
  startDate: Date;

  @ApiProperty({
    description: "Work's end date",
    example: '2021-04-01',
    nullable: true,
    required: false,
  })
  @IsDateString()
  @IsNotEmpty()
  @IsOptional()
  endDate?: Date;

  @ApiProperty({
    description: 'Flag to leave public work',
    example: true,
    default: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  @IsDefined()
  visible: boolean;

  //Relations
  @ApiProperty({
    type: ValidationRaletion,
    description: 'Members participating in the work',
    isArray: true,
    minItems: 1,
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ValidationRaletion)
  members: ValidationRaletion[];

  @ApiProperty({
    type: ValidationRaletion,
    description: 'The Expertise Areas of this work',
    isArray: true,
    minItems: 1,
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ValidationRaletion)
  areaExpertise: ValidationRaletion[];

  @ApiProperty({
    type: ValidationRaletion,
    description: 'The Categories of this work',
    isArray: true,
    minItems: 1,
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ValidationRaletion)
  categories: ValidationRaletion[];

  @ApiProperty({
    type: ValidationRaletion,
    description: 'The Types of this work',
    isArray: true,
    minItems: 1,
  })
  @IsArray()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ValidationRaletion)
  types: ValidationRaletion[];
}

export class ICreateWorkDTO {
  @IsDefined()
  newWorkData: ICreateWorkBasicDTO;

  @IsDefined()
  @IsUUID()
  idMember: string;
}

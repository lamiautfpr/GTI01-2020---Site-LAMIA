import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsInt,
  IsOptional,
} from 'class-validator';

export default class ICreateAreaExpertiseDTO {
  @IsDefined()
  @IsNotEmpty()
  @IsInt()
  id: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description?: string;

  @IsDefined()
  createAt: Date;

  @IsDefined()
  updateAt: Date;
}

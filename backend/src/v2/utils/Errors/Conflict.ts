import { ApiProperty } from '@nestjs/swagger';

export enum ERRORS_CONFLICT {
  CONFLICT = 'CONFLICT',
}

export class Conflict {
  @ApiProperty({
    type: 'string',
    description: 'Date and time the request was made',
    example: '2022-01-24T23:34:16.687Z',
  })
  timeStamp: string;

  @ApiProperty({
    type: 'string',
    description: 'Path the request was made',
  })
  path: string;

  @ApiProperty({
    type: 'string',
    description: 'HTTP status code number',
    default: '409',
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    description: 'HTTP status code name',
    default: 'CONFLICT',
  })
  errorMessage: string;

  @ApiProperty({
    type: 'string',
    description: 'Method the request was made',
    enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  })
  method: string;

  @ApiProperty({
    type: 'string',
    description: 'errors or error found',
    example: [
      `The <attribute> "<data>" already exists`,
      `The email "joe.doe@utfpr.edu.br" already exists`,
      `The patent "Orientador" already exists`,
    ],
  })
  errors: string | string[];
}

export default {
  description: 'Conflict - Data already exists',
  type: Conflict,
};

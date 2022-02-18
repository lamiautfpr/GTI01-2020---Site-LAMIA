import { ApiProperty } from '@nestjs/swagger';

export enum ERRORS_UNPROCESSABLE_ENTITY {
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  DEFAULT_PASSWORD_NOT_DEFINED = "Member's default password not defined",
}

export class UnprocessableEntity {
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
    default: '422',
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    description: 'HTTP status code name',
    default: 'UNPROCESSABLE ENTITY',
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
    enum: [
      ERRORS_UNPROCESSABLE_ENTITY.UNPROCESSABLE_ENTITY,
      Object.values(ERRORS_UNPROCESSABLE_ENTITY).splice(1),
    ],
  })
  errors: string | string[];
}

export default {
  description: 'UNPROCESSABLE ENTITY',
  type: UnprocessableEntity,
};

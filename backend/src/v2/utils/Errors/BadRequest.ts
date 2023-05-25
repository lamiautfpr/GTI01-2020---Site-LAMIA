import { ApiProperty } from '@nestjs/swagger';

export enum ERRORS_BAD_REQUEST {
  BAD_REQUEST = 'BAD REQUEST',
}

export class BadRequest {
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
    default: '400',
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    description: 'HTTP status code name',
    default: 'BAD REQUEST',
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
    description: 'List of the attributes on payload that caused the error',
    example: [
      '<attribute> <validation>',
      'name should not be null or undefined',
      'name should not be empty',
      'name must be a string',
      'email must be an email',
      'patentId must be a UUID',
    ],
  })
  errors: string | string[];
}

export default {
  description: 'Bad Request - Payload/Params is not valid',
  type: BadRequest,
};

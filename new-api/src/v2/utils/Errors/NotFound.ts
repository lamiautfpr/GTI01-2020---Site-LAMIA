import { ApiProperty } from '@nestjs/swagger';

export enum ERRORS_NOT_FOUND {
  NOT_FOUND = 'NOT FOUND',
  NOT_FOUND_LOGIN = 'Not found member with login',
  NOT_FOUND_ID = 'Not found member with id',
  NOT_FOUND_PATENT_NAME = 'Not found patent with name',
  NOT_FOUND_CATEGORY_NAME = 'Not found category with name',
  NOT_FOUND_WORK_SLUG = 'Not found work with slug',
}

export class NotFound {
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
    default: '404',
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    description: 'HTTP status code name',
    default: 'NOT FOUND',
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
      ERRORS_NOT_FOUND.NOT_FOUND,
      Object.values(ERRORS_NOT_FOUND).splice(1),
    ],
  })
  errors: string | string[];
}

export default {
  description: "NOT FOUND - Don't exists data",
  type: NotFound,
};

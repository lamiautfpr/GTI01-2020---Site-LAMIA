import { ApiProperty } from '@nestjs/swagger';

export enum ERRORS_FORBIDDEN {
  FORBIDDEN = 'FORBIDDEN',
  PATENT_DONT_HAVE_PERMISSION_FOR_CREATE_MEMBER = "Your patent don't have permission for creating a new member",
  PATENT_DONT_HAVE_PERMISSION_FOR_UPDATE_MEMBER = "Your patent don't have permission for update member",
  PATENT_DONT_HAVE_PERMISSION_FOR_DELETE_MEMBER = "Your patent don't have permission for deleting a member",
  PATENT_DONT_HAVE_PERMISSION_FOR_CREATE_PATENT = "Your patent don't have permission for creating a new patent",
  PATENT_DONT_HAVE_PERMISSION_FOR_UPDATE_PATENT = "Your patent don't have permission for update patent",
  PATENT_DONT_HAVE_PERMISSION_FOR_DELETE_PATENT = "Your patent don't have permission for deleting a patent",
  PATENT_DONT_HAVE_PERMISSION_FOR_CREATE_CATEGORY = "Your patent don't have permission for creating a new category",
  PATENT_DONT_HAVE_PERMISSION_FOR_UPDATE_CATEGORY = "Your patent don't have permission for update category",
  PATENT_DONT_HAVE_PERMISSION_FOR_DELETE_CATEGORY = "Your patent don't have permission for deleting a category",
  PATENT_DONT_HAVE_PERMISSION_FOR_CREATE_TYPE = "Your patent don't have permission for creating a new type",
  PATENT_DONT_HAVE_PERMISSION_FOR_UPDATE_TYPE = "Your patent don't have permission for update type",
  PATENT_DONT_HAVE_PERMISSION_FOR_DELETE_TYPE = "Your patent don't have permission for deleting a type",
  PATENT_DONT_HAVE_PERMISSION_FOR_CREATE_WORK = "Your patent don't have permission for creating a new work",
  PATENT_DONT_HAVE_PERMISSION_FOR_UPDATE_WORK = "Your patent don't have permission for update work",
  PATENT_DONT_HAVE_PERMISSION_FOR_DELETE_WORK = "Your patent don't have permission for deleting a work",
  PATENT_DONT_HAVE_PERMISSION_FOR_CREATE_AREA_EXPERTISE = "Your patent don't have permission for creating a new area expertise",
  PATENT_DONT_HAVE_PERMISSION_FOR_UPDATE_AREA_EXPERTISE = "Your patent don't have permission for update area expertise",
  PATENT_DONT_HAVE_PERMISSION_FOR_DELETE_AREA_EXPERTISE = "Your patent don't have permission for deleting a area expertise",
}

export class Forbidden {
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
    default: '403',
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    description: 'HTTP status code name',
    default: 'FORBIDDEN',
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
      ERRORS_FORBIDDEN.FORBIDDEN,
      Object.values(ERRORS_FORBIDDEN).splice(1),
    ],
  })
  errors: string | string[];
}

export default {
  description: 'Forbidden',
  type: Forbidden,
};

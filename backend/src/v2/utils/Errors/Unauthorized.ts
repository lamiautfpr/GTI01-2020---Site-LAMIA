import { ApiProperty } from '@nestjs/swagger';

export enum ERRORS_UNAUTHORIZED {
  UNAUTHORIZED = 'Unauthorized',
  YOU_NEED_TO_BE_LOGGED_IN = 'You must be logged in with a valid member',
  OLD_TOKEN_INVALID = 'oldToken is not valid',
  LOGIN_OR_EMAIL_INVALID = 'Login/Email or password is incorrect',
}

export class Unauthorized {
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
    default: '401',
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    description: 'HTTP status code name',
    default: 'UNAUTHORIZED',
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
      ERRORS_UNAUTHORIZED.UNAUTHORIZED,
      Object.values(ERRORS_UNAUTHORIZED).splice(1),
    ],
  })
  errors: string | string[];
}

export default {
  description: 'UNAUTHORIZED',
  type: Unauthorized,
};

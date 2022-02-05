import { ApiProperty, ApiResponseOptions } from '@nestjs/swagger';

export class BadRequest {
  @ApiProperty({
    default: 400,
    description: 'HTTP Status Code',
  })
  statusCode: 400;

  @ApiProperty({
    example: ['attributes must be a string'],
    description: ' Error messages',
    isArray: true,
  })
  message: string[];

  @ApiProperty({
    default: 'Bad Request',
    description: 'Type Error',
  })
  error: 'Bad Request';
}

export default {
  description: 'Bad Request',
  type: BadRequest,
} as ApiResponseOptions;

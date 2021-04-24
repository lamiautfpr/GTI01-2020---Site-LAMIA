import { ApiProperty } from '@nestjs/swagger';

export default class BadRequest {
  @ApiProperty({
    default: 400,
    description: 'HTTP Status Code',
  })
  statusCode: 400;

  @ApiProperty({
    example: ['attributes must be a string'],
    description: ' Error messages',
    default: 400,
    isArray: true,
  })
  message: string[];

  @ApiProperty({
    default: 'Bad Request',
    description: 'Type Error',
  })
  error: 'Bad Request';
}

import { ApiProperty } from '@nestjs/swagger';

export default class Conflict {
  @ApiProperty({
    default: 409,
    description: 'HTTP Status Code',
  })
  statusCode: 409;

  @ApiProperty({
    example: ['attributes already exists'],
    description: ' Error messages',
    isArray: true,
  })
  message: string[];

  @ApiProperty({
    default: 'Conflict',
    description: 'Type Error',
  })
  error: 'Conflict';
}
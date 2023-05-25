import { ApiProperty } from '@nestjs/swagger';

export class InternalServer {
  @ApiProperty({
    default: 500,
    description: 'HTTP Status Code',
  })
  statusCode: 500;

  @ApiProperty({
    example: 'Internal server error',
    description: ' Error messages',
  })
  message: string;
}

export default {
  description: "Internal Server Error - Error don't expected",
  type: InternalServer,
};

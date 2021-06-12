import { ApiProperty } from '@nestjs/swagger';
import { EntityMember } from '../typeorm/entities/member.entity';

class AuthResponse {
  @ApiProperty({
    type: String,
    description: 'API access token',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjM1MDc5MDgsImV4cCI6MTYyMzU5NDMwOH0.ackwo5GtH7nBJRgjes3DfN7SJf5Etl9hkgWSSNg9dYw',
  })
  accessToken: string;
}

export class IResponseLogin {
  @ApiProperty({
    type: AuthResponse,
    description: "Authentication's data",
  })
  auth: AuthResponse;

  @ApiProperty({
    type: EntityMember,
    description: "Member's data",
  })
  member: EntityMember;
}

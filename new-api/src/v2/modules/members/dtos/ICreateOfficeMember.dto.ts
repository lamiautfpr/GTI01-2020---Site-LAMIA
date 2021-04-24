import { ApiProperty } from '@nestjs/swagger';

export default class ICreateOfficeMemberDTO {
  @ApiProperty({
    description: 'Name of office member',
    example: 'Novato',
  })
  name: string;

  @ApiProperty({
    description: 'Descriptions of office member',
    example: 'Os novatos são os alunos que acabaram de iniciar no laboratório',
    required: false,
  })
  description?: string;
}

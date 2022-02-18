import { EntityMember } from '@modules/members/typeorm/entities/member.entity';
import { hash } from 'bcryptjs';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertMemberAdministrator1631109731041
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const password = await hash(`${process.env.PASSWORD_DEFAULT_MEMBERS}`, 8);

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('tb_member')
      .values([
        {
          password,
          id: '209afe13-4c74-4245-9e99-a1cec39dec1b',
          name: 'Brainiac',
          login: 'brainiac',
          email: 'brainiac@alunos.utfpr.edu.br',
          patent: 'd4975451-c598-4af4-9a3b-070df207dab7',
          description:
            'Sou um ciborgue ou androide extraterrestre e vim te ajudar',
          createAt: new Date(),
          updateAt: new Date(),
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(EntityMember, [
      '209afe13-4c74-4245-9e99-a1cec39dec1b',
    ]);
  }
}

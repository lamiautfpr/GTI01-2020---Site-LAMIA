import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableOfficeMember1619364226358
  implements MigrationInterface {
  name = 'CreateTableOfficeMember1619364226358';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tb_office_member" ("id" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" text, CONSTRAINT "UQ_2a23f4a52ce0db24b290ea713b3" UNIQUE ("name"), CONSTRAINT "PK_c73113ca35579c7b2e2d0e0f5ca" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tb_office_member"`);
  }
}

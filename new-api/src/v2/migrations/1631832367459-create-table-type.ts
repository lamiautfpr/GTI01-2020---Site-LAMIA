import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateTableType1631832367459
  implements MigrationInterface {
  name = 'createTableType1631832367459';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tb_type" ("id" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying, CONSTRAINT "UQ_0f47456bf769a05ce8392be0f28" UNIQUE ("name"), CONSTRAINT "PK_4c981dc84ed6d246e510903176a" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tb_type"`);
  }
}

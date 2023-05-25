import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCategories1631722522030 implements MigrationInterface {
  name = 'insertCategories1631722522030';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tb_category" ("id" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_394d39970459679271183ff2bee" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tb_category"`);
  }
}

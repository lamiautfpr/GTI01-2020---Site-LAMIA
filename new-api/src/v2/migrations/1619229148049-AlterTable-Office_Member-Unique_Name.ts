import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableOfficeMemberUniqueName1619229148049
  implements MigrationInterface {
  name = 'AlterTableOfficeMemberUniqueName1619229148049';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `COMMENT ON COLUMN "tb_office_member"."name" IS NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_office_member" ADD CONSTRAINT "UQ_2a23f4a52ce0db24b290ea713b3" UNIQUE ("name")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tb_office_member" DROP CONSTRAINT "UQ_2a23f4a52ce0db24b290ea713b3"`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "tb_office_member"."name" IS NULL`,
    );
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterTableWorkAlterColumnInternalCode1638273362380
  implements MigrationInterface {
  name = 'AlterTableWorkAlterColumnInternalCode1638273362380';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tb_work" ALTER COLUMN "internalCode" DROP NOT NULL`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "tb_work"."internalCode" IS NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `COMMENT ON COLUMN "tb_work"."internalCode" IS NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work" ALTER COLUMN "internalCode" SET NOT NULL`,
    );
  }
}

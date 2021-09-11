import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterTableMemberAddCascadeWithPatient1631359107976
  implements MigrationInterface {
  name = 'AlterTableMemberAddCascadeWithPatient1631359107976';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tb_member" DROP CONSTRAINT "FK_5ea9c8b39572f2bfeb6c5cd8294"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_member" ADD CONSTRAINT "FK_5ea9c8b39572f2bfeb6c5cd8294" FOREIGN KEY ("patentId") REFERENCES "tb_patent"("id") ON DELETE SET NULL ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tb_member" DROP CONSTRAINT "FK_5ea9c8b39572f2bfeb6c5cd8294"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_member" ADD CONSTRAINT "FK_5ea9c8b39572f2bfeb6c5cd8294" FOREIGN KEY ("patentId") REFERENCES "tb_patent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}

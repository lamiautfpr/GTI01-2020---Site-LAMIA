import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateTableWorks1638238539581
  implements MigrationInterface {
  name = 'CreateTableWorks1638238539581';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tb_work" ("id" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "internalCode" character varying NOT NULL, "title" character varying NOT NULL, "slug" character varying NOT NULL, "objective" text, "github" character varying, "startDate" date NOT NULL, "endDate" date, "visible" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_ce4d5a53af2c3c6e345fc930331" UNIQUE ("internalCode"), CONSTRAINT "UQ_06e8c98108210fcb1308d322191" UNIQUE ("slug"), CONSTRAINT "UQ_dd6e7beb27358a65ef840fdd990" UNIQUE ("github"), CONSTRAINT "PK_b6fa53d09e7da34279c0a84ad94" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tb_work_members_tb_member" ("tbWorkId" character varying NOT NULL, "tbMemberId" character varying NOT NULL, CONSTRAINT "PK_136ac0ee93ff61db786048259a3" PRIMARY KEY ("tbWorkId", "tbMemberId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e2f6360d12216dce6fb4d96ae3" ON "tb_work_members_tb_member" ("tbWorkId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_8125e239f6fdfc6e037231c52d" ON "tb_work_members_tb_member" ("tbMemberId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "tb_work_area_expertise_tb_area_expertise" ("tbWorkId" character varying NOT NULL, "tbAreaExpertiseId" character varying NOT NULL, CONSTRAINT "PK_1f4ee68188e3e07193a57630b31" PRIMARY KEY ("tbWorkId", "tbAreaExpertiseId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a2ae6c5f03c938e0b1c036ce89" ON "tb_work_area_expertise_tb_area_expertise" ("tbWorkId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6054eb9da4f44c27a10a4a3129" ON "tb_work_area_expertise_tb_area_expertise" ("tbAreaExpertiseId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "tb_work_categories_tb_category" ("tbWorkId" character varying NOT NULL, "tbCategoryId" character varying NOT NULL, CONSTRAINT "PK_c1d2662b4439dad58d3e90e968d" PRIMARY KEY ("tbWorkId", "tbCategoryId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c10aeb8c7318beddca37297ba9" ON "tb_work_categories_tb_category" ("tbWorkId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_068ac0300edd3018a5c0574f7b" ON "tb_work_categories_tb_category" ("tbCategoryId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "tb_work_types_tb_type" ("tbWorkId" character varying NOT NULL, "tbTypeId" character varying NOT NULL, CONSTRAINT "PK_7665b0e88537ffc15ab2ce7be4f" PRIMARY KEY ("tbWorkId", "tbTypeId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_27c6f8fc9699387d4bb6758d02" ON "tb_work_types_tb_type" ("tbWorkId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_df2740424bed730ac2a04cc46b" ON "tb_work_types_tb_type" ("tbTypeId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_members_tb_member" ADD CONSTRAINT "FK_e2f6360d12216dce6fb4d96ae32" FOREIGN KEY ("tbWorkId") REFERENCES "tb_work"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_members_tb_member" ADD CONSTRAINT "FK_8125e239f6fdfc6e037231c52dd" FOREIGN KEY ("tbMemberId") REFERENCES "tb_member"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_area_expertise_tb_area_expertise" ADD CONSTRAINT "FK_a2ae6c5f03c938e0b1c036ce898" FOREIGN KEY ("tbWorkId") REFERENCES "tb_work"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_area_expertise_tb_area_expertise" ADD CONSTRAINT "FK_6054eb9da4f44c27a10a4a31292" FOREIGN KEY ("tbAreaExpertiseId") REFERENCES "tb_area_expertise"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_categories_tb_category" ADD CONSTRAINT "FK_c10aeb8c7318beddca37297ba9f" FOREIGN KEY ("tbWorkId") REFERENCES "tb_work"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_categories_tb_category" ADD CONSTRAINT "FK_068ac0300edd3018a5c0574f7bc" FOREIGN KEY ("tbCategoryId") REFERENCES "tb_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_types_tb_type" ADD CONSTRAINT "FK_27c6f8fc9699387d4bb6758d021" FOREIGN KEY ("tbWorkId") REFERENCES "tb_work"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_types_tb_type" ADD CONSTRAINT "FK_df2740424bed730ac2a04cc46b5" FOREIGN KEY ("tbTypeId") REFERENCES "tb_type"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tb_work_types_tb_type" DROP CONSTRAINT "FK_df2740424bed730ac2a04cc46b5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_types_tb_type" DROP CONSTRAINT "FK_27c6f8fc9699387d4bb6758d021"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_categories_tb_category" DROP CONSTRAINT "FK_068ac0300edd3018a5c0574f7bc"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_categories_tb_category" DROP CONSTRAINT "FK_c10aeb8c7318beddca37297ba9f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_area_expertise_tb_area_expertise" DROP CONSTRAINT "FK_6054eb9da4f44c27a10a4a31292"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_area_expertise_tb_area_expertise" DROP CONSTRAINT "FK_a2ae6c5f03c938e0b1c036ce898"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_members_tb_member" DROP CONSTRAINT "FK_8125e239f6fdfc6e037231c52dd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_work_members_tb_member" DROP CONSTRAINT "FK_e2f6360d12216dce6fb4d96ae32"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_df2740424bed730ac2a04cc46b"`);
    await queryRunner.query(`DROP INDEX "IDX_27c6f8fc9699387d4bb6758d02"`);
    await queryRunner.query(`DROP TABLE "tb_work_types_tb_type"`);
    await queryRunner.query(`DROP INDEX "IDX_068ac0300edd3018a5c0574f7b"`);
    await queryRunner.query(`DROP INDEX "IDX_c10aeb8c7318beddca37297ba9"`);
    await queryRunner.query(`DROP TABLE "tb_work_categories_tb_category"`);
    await queryRunner.query(`DROP INDEX "IDX_6054eb9da4f44c27a10a4a3129"`);
    await queryRunner.query(`DROP INDEX "IDX_a2ae6c5f03c938e0b1c036ce89"`);
    await queryRunner.query(
      `DROP TABLE "tb_work_area_expertise_tb_area_expertise"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_8125e239f6fdfc6e037231c52d"`);
    await queryRunner.query(`DROP INDEX "IDX_e2f6360d12216dce6fb4d96ae3"`);
    await queryRunner.query(`DROP TABLE "tb_work_members_tb_member"`);
    await queryRunner.query(`DROP TABLE "tb_work"`);
  }
}

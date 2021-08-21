import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableAreaExpertise1629553265611
  implements MigrationInterface {
  name = 'createTableAreaExpertise1629553265611';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tb_area_expertise" ("id" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying, CONSTRAINT "UQ_c964a1eb1074c98736075cf67da" UNIQUE ("name"), CONSTRAINT "PK_bb86c9bdfc3a1c9c54cfcc945ee" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tb_area_expertise"`);
  }
}

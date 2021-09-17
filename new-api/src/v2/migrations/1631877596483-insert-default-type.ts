import { MigrationInterface, QueryRunner } from 'typeorm';
import { EntityType } from '@modules/works/typeorm/entities/type.entity';

export default class insertDefaultType1631877596483
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntityType, [
      {
        id: 'ffc2fa9a-16a1-4270-8946-c20bb38281be',
        name: 'Pesquisa (Científica e Tecnológica)',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: 'd3d18ede-a95e-4846-a81b-8d4b90545e4b',
        name: 'Extensão',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '9561ea4e-d773-4e7f-8f7f-6c5729443e38',
        name: 'TCC',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '012d4e8f-3521-40cf-a90c-602b4e64cc52',
        name: 'Mestrado',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: 'eb217f50-3bc4-4e01-8133-3b739f89ae08',
        name: 'Livros e Partes de Livros',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: 'ab908d5a-35d0-4219-9c1d-c003f6cc5f19',
        name: 'Periódico',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '3d1af777-5aa5-4186-9d76-e58ab7e21278',
        name: 'Conferência',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: 'dd6b5a11-a9ed-4ad5-a0ea-5a236b1b91c1',
        name: 'Relatório',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: 'e033991a-77cf-42ba-b569-4e58cccbc7c5',
        name: 'Monografias e Dissertações',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '2711bc1f-4410-4fc7-99d4-20829c5eea81',
        name: 'Patente',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '61f710f9-9dca-4e54-8a8a-ff3fa0f9dd0f',
        name: 'Software',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '21824dc0-38f6-4e29-b4b6-a58f6280ab63',
        name: 'Consultoria',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: 'bbc8141f-3ce9-4e21-8bdc-ca42f0667af7',
        name: 'Cursos e Materiais Didáticos',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: 'e0b8bcf9-1109-4fb9-9988-810c32ece514',
        name: 'Conferências e Congressos',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '6ce12dd0-6ce3-48c9-91f4-2af5fc1b86e1',
        name: 'Webinar e Qualifações',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '7c781c06-6973-4886-b2d2-7c6494e58e74',
        name: 'Reuniões e Confraternizações',
        description: null,
        createAt: new Date(),
        updateAt: new Date(),
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(EntityType, [
      '7c781c06-6973-4886-b2d2-7c6494e58e74',
      '6ce12dd0-6ce3-48c9-91f4-2af5fc1b86e1',
      'e0b8bcf9-1109-4fb9-9988-810c32ece514',
      'bbc8141f-3ce9-4e21-8bdc-ca42f0667af7',
      '21824dc0-38f6-4e29-b4b6-a58f6280ab63',
      '61f710f9-9dca-4e54-8a8a-ff3fa0f9dd0f',
      '2711bc1f-4410-4fc7-99d4-20829c5eea81',
      'e033991a-77cf-42ba-b569-4e58cccbc7c5',
      'dd6b5a11-a9ed-4ad5-a0ea-5a236b1b91c1',
      '3d1af777-5aa5-4186-9d76-e58ab7e21278',
      'ab908d5a-35d0-4219-9c1d-c003f6cc5f19',
      'eb217f50-3bc4-4e01-8133-3b739f89ae08',
      '012d4e8f-3521-40cf-a90c-602b4e64cc52',
      '9561ea4e-d773-4e7f-8f7f-6c5729443e38',
      'd3d18ede-a95e-4846-a81b-8d4b90545e4b',
      'ffc2fa9a-16a1-4270-8946-c20bb38281be',
    ]);
  }
}

import { EntityCategory } from '@modules/works/typeorm/entities/category.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCategories1631723024164 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntityCategory, [
      {
        id: '66125bb4-78e7-427f-a1e9-bbabb73e8248',
        name: 'Produtos',
        description:
          'Tecnologias e soluções desenvolvidas pelo LAMIA em forma de produto que são registradas formalmente nos órgãos oficiais (INPI e FUNTEF) e podem ser colocadas em produção para resolver problemas de empresas, indústrias e organizações do setor público e privado.',
        createAt: '2020-12-02T17:52:57.343Z',
        updateAt: '2020-12-02T17:52:57.343Z',
      },
      {
        id: '0ef5c9c7-ff52-4d40-b765-d03448a1568d',
        name: 'Projetos',
        description:
          'Projetos de pesquisa em desenvolvimento ou já finalizados pelo LAMIA com foco na pesquisa científica e aplicação das soluções em ambientes de produção de empresas, indústrias e organizações públicas.',
        createAt: '2020-12-02T17:52:57.343Z',
        updateAt: '2020-12-02T17:52:57.343Z',
      },
      {
        id: 'a1e29ee9-63eb-4cb9-a449-841c39b24fa5',
        name: 'Publicações',
        description:
          'Divulgação dos resultados obtidos nas diversas pesquisas e provas de conceito realizadas pelo LAMIA na forma de artigos e demais artefatos científicos publicados em periódicos e conferências.',
        createAt: '2020-12-02T17:52:57.343Z',
        updateAt: '2020-12-02T17:52:57.343Z',
      },
      {
        id: '1544cea7-ac1e-41ec-b07f-2b46989fcb28',
        name: 'Eventos',
        description:
          'Organização e participação em eventos científicos, técnicos, webinar e eventos de qualificação, meetups e confraternizações dos integrantes do LAMIA.',
        createAt: '2020-12-02T17:52:57.343Z',
        updateAt: '2020-12-02T17:52:57.343Z',
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(EntityCategory, [
      '66125bb4-78e7-427f-a1e9-bbabb73e8248',
      '0ef5c9c7-ff52-4d40-b765-d03448a1568d',
      'a1e29ee9-63eb-4cb9-a449-841c39b24fa5',
      '1544cea7-ac1e-41ec-b07f-2b46989fcb28',
    ]);
  }
}

import { EntityPatent } from '@modules/members/typeorm/entities/patent.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export default class InsertPatentDefaultPatents1631107136387
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(EntityPatent, [
      {
        id: 'd4975451-c598-4af4-9a3b-070df207dab7',
        name: 'Administrador',
        description:
          'Usuário padrão para novos testes e implementação, tem acesso total ao sistema.',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: 'ff4332f2-a870-48d7-861f-4cf14f4e228f',
        name: 'Coordenador',
        description:
          'O Professor Coordenador controla a quantidade de alunos que integram o quadro do laboratório, bem como distribuir horários de uso quando necessário. Gerenciar o processo seletivo de entrada de Novatos. Intermediar a relação entre o laboratório e universidade.',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: 'a278f769-f860-4a09-a5c9-d70b79e15526',
        name: 'Orientador',
        description:
          'Os Professores Orientadores instrui os discentes do LAMIA, garantindo responsabilidade e qualidade dos trabalhos. Captar novos alunos e intermediar a relação entre alunos, laboratório e universidade.Buscar por recursos e materiais necessários para a ampliação e manutenção do LAMIA.',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '59e7ee4e-f418-4a1e-974e-42e6622acd76',
        name: 'Colaborador',
        description:
          'O Professor Colaborador é aquele membro não efetivo do LAMIA e que está vinculado ao laboratório através de pelo menos um projeto em execução ou finalizado',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '86f43d05-9b3c-4333-8135-d6d23c468e14',
        name: 'Membro',
        description:
          'É considerado Membro do laboratório apenas aquele aluno que possui projeto em andamento com pelo menos um Orientador.',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '048bd9d0-4c59-4415-97c3-259dc81b5ef4',
        name: 'Veterano',
        description:
          'É considerado Veterano um membro que terminou suas atividades com sucesso e aceitou colaborar indiretamente com o funcionamento do LAMIA.',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '85c9fbbb-d180-4dfb-b789-016981a02418',
        name: 'Novato',
        description:
          'Aluno Novato é aquele que ingressou no LAMIA através de processo seletivo está desenvolvendo pré-projeto durante o semestre vigente.',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '8ccc9e81-700a-466f-a31f-90d33db250c5',
        name: 'TCC',
        description:
          'Aluno TCC é aquele que ingressou no laboratório para desenvolvimento de seu trabalho de conclusão de curso.',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: 'b92279c3-dde0-4784-a966-fcb49ef76fec',
        name: 'Alumni',
        description:
          'Alumni é um ex-aluno do LAMIA que segue seus passos no mundo trabalho.',
        createAt: new Date(),
        updateAt: new Date(),
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(EntityPatent, [
      'b92279c3-dde0-4784-a966-fcb49ef76fec',
      '8ccc9e81-700a-466f-a31f-90d33db250c5',
      '85c9fbbb-d180-4dfb-b789-016981a02418',
      '048bd9d0-4c59-4415-97c3-259dc81b5ef4',
      '86f43d05-9b3c-4333-8135-d6d23c468e14',
      '59e7ee4e-f418-4a1e-974e-42e6622acd76',
      'a278f769-f860-4a09-a5c9-d70b79e15526',
      'ff4332f2-a870-48d7-861f-4cf14f4e228f',
      'd4975451-c598-4af4-9a3b-070df207dab7',
    ]);
  }
}

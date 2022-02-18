module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'type_members',
      [
        {
          name: 'administrator',
          description:
            'Standard user for new tests and implementation, has full access to the system.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Coordenador',
          description:
            'O Professor Coordenador controla a quantidade de alunos que integram o quadro do laboratório, bem como distribuir horários de uso quando necessário. Gerenciar o processo seletivo de entrada de Novatos. Intermediar a relação entre o laboratório e universidade.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Orientador',
          description:
            'Os Professores Orientadores instrui os discentes do LAMIA, garantindo responsabilidade e qualidade dos trabalhos. Captar novos alunos e intermediar a relação entre alunos, laboratório e universidade.Buscar por recursos e materiais necessários para a ampliação e manutenção do LAMIA.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Colaborador',
          description:
            'O Professor Colaborador é aquele membro não efetivo do LAMIA e que está vinculado ao laboratório através de pelo menos um projeto em execução ou finalizado',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Membro',
          description:
            'É considerado Membro do laboratório apenas aquele aluno que possui projeto em andamento com pelo menos um Orientador.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Veterano',
          description:
            'É considerado Veterano um membro que terminou suas atividades com sucesso e aceitou colaborar indiretamente com o funcionamento do LAMIA.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Novato',
          description:
            'Aluno Novato é aquele que ingressou no LAMIA através de processo seletivo está desenvolvendo pré-projeto durante o semestre vigente.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'TCC',
          description:
            'Aluno TCC é aquele que ingressou no laboratório para desenvolvimento de seu trabalho de conclusão de curso.',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};

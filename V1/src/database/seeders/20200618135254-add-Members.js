const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'members',
      [
        {
          name: 'Anderson Brilhador',
          email: 'brilhador@utfpr.edu.br',
          linkedin: 'anderson-brilhador-88092b81',
          git_hub: 'Brilhador',
          lattes: '0341341858649732',
          avatar_id: 4,
          office_id: 3,
          login: 'brilhador',
          description:
            'Orientador do LAMIA e docente no curso de Ciência da Computação da UTFPR Santa Helena. Desenvolve pesquisas nas seguintes áreas: Computer Vision, Data Science, Data Mining, Machine Learning e Deep Learning.',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
        },
        {
          name: 'Arlete Beuren',
          email: 'arletebeuren@utfpr.edu.br',
          git_hub: 'arletebeuren',
          lattes: '0084145280240578',
          avatar_id: 13,
          office_id: 3,
          login: 'arletebeuren',
          description:
            'Orientadora do LAMIA e docente no Curso de Ciência da Computação da UTFPR. Interesse de pesquisas nas áreas de Visão Computacional/Processamento de Imagens/Reconhecimento de Padrões/Big Data/Computação Gráfica/Realidade Virtual/Desenvolvimento Web.',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
        },
        {
          name: 'Guilherme Yoshida',
          email: 'guilhermet@alunos.utfpr.edu.br',
          linkedin: 'guilherme-yoshida-teixeira-5a8107161',
          git_hub: 'guiyshd',
          lattes: '9341853064626160',
          avatar_id: 5,
          office_id: 7,
          login: 'guiyshd',
          description:
            'Bachelor of Computer Science with emphasis on mathematical and theoretical foundations of computing, specializing in business intelligence using data science and machine learning through virtual environments.',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
        },
        {
          name: 'Heitor Vilas Boas',
          email: 'hboas@alunos.utfpr.edu.br',
          git_hub: 'heitorVilasBoas',
          avatar_id: 3,
          office_id: 5,
          login: 'HeitorVilasBoas',
          description:
            'Graduando em Ciência da computação e integrante do projeto de aprendizado atráves de um ambiente virtual',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
        },
        {
          name: 'Hugo José Teixeira de Freitas',
          email: 'hugofreitas@alunos.utfpr.edu.br',
          avatar_id: 3,
          office_id: 7,
          login: 'hfreitas',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
          description:
            'Estou tendo muito projetos não consegui fazer minha descrição...',
        },
        {
          name: 'Jecé Xavier Pereira Neto',
          email: 'jece@alunos.utfpr.edu.br',
          linkedin: 'jece-xavier',
          git_hub: 'XavierJece',
          lattes: '1289293936077853',
          avatar_id: 6,
          office_id: 5,
          login: 'XavierJece',
          description:
            'Computer Science student. Enthusiast of: Big Data, Data Science, Machine Learning, Mathematics and Full Stack Development with NodeJS, ReactJS, React Native.',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
        },
        {
          name: 'Jeferson Carlos Martin',
          email: 'Jefersoncmn@hotmail.com',
          git_hub: 'jefersoncmn',
          avatar_id: 7,
          office_id: 7,
          login: 'JCMArtin',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
          description:
            'Estou tendo muito projetos não consegui fazer minha descrição...',
        },
        {
          name: 'João Ewerton Duarte de Souza',
          email: 'joaosouza@alunos.utfpr.edu.br',
          linkedin: 'joão-souza-b3862b182',
          git_hub: 'e-duarte',
          avatar_id: 8,
          office_id: 8,
          login: 'eduarte',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
          description:
            'Estou tendo muito projetos não consegui fazer minha descrição...',
        },
        {
          name: 'João Vinicius da Luz Pacheco',
          email: 'joaopacheco@alunos.utfpr.edu.br',
          git_hub: 'joaopacheco7',
          avatar_id: 3,
          office_id: 7,
          login: 'jpacheco',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
          description:
            'Estou tendo muito projetos não consegui fazer minha descrição...',
        },
        {
          name: 'Luis Fernando da Rosa',
          email: 'luisrosa.2018@alunos.utfpr.edu.br',
          linkedin: 'luis-fernando-rosa-244096194',
          git_hub: 'LuisFernandoRosa',
          avatar_id: 9,
          office_id: 5,
          login: 'LuisFernando',
          description:
            'Curso Ciência da Computação na UTFPR-SH, sou membro do LAMIA e participo de um projeto de iniciação cientifica na área de Visão Computacional.',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
        },
        {
          name: 'Marcos Kai Chiun Huang',
          email: 'marcoshuang@alunos.utfpr.edu.br',
          git_hub: 'marcoshung',
          lattes: '8762052372977632',
          avatar_id: 3,
          office_id: 7,
          login: 'MarcosHuang',
          description:
            'Acadêmico no curso de Ciência da Computação da UTFPR-SH. Atualmente, estudo na área visão computação do Laboratório de Aprendizagem de Máquina Aplicada a Indústria (LAMIA)',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
        },
        {
          name: 'Nathalia Vieira Mota de Oliveira',
          email: 'nathaliaoliveira@alunos.utfpr.edu.br',
          linkedin: 'nathaliavmoliveira',
          git_hub: 'nathmota',
          lattes: '6369603530052208',
          avatar_id: 3,
          office_id: 5,
          login: 'nathaliaoliveira',
          description:
            'Graduanda em Ciência da Computação e participante de programa de iniciação científica na área de Ciência de Dados.',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
        },
        {
          name: 'Rafael Lechensque de Aquino',
          email: 'rafaelaquino@alunos.utfpr.edu.br',
          linkedin: 'rafael-lechensque-de-aquino-ba602a122',
          git_hub: 'RafaelLechensqueDeAquino',
          lattes: '2498414553758717',
          avatar_id: 10,
          office_id: 7,
          login: 'RafaelLechensque',
          description:
            'Acadêmico em Ciência da Computação, estou em pesquisas na área Visão Computacional no Laboratório de Aprendizado de Maquinas Aplicada a Industria - LAMIA',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
        },
        {
          name: 'Thiago França Naves',
          email: 'naves@utfpr.edu.br',
          linkedin: 'thiago-frança-naves-61959857',
          git_hub: 'tfnaves',
          lattes: '2177644773849043',
          avatar_id: 11,
          office_id: 2,
          login: 'naves',
          description:
            'Coordenador do LAMIA e docente no curso de Ciência da Computação da UTFPR Santa Helena. Conduz pesquisas nas áreas de Ciência de Dados e Visão Computacional e trabalha junto a incubadoras no desenvolvimento de empresas de base técnológicas e startups',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
        },
        {
          name: 'Wagner Destro',
          email: 'wagnerdestro@alunos.utfpr.edu.br',
          linkedin: 'wagner-leandro-s-576505121',
          git_hub: 'wagnerDestro',
          avatar_id: 12,
          office_id: 5,
          login: 'wdestro',
          description:
            'Graduando em Ciência da Computação e integrante do projeto de Aprendizado Através de um Ambiente Virtual',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: bcrypt.hashSync('&mlamia$f', 8),
        },
      ],
      {}
    );
  },

  down: () => {},
};

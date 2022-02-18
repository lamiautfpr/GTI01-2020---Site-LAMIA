module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert(
            'area_expertises',
            [
                {
                    name: 'Data Science',
                    description:
                        'Data Science (Ciência de Dados) é o estudo disciplinado dos dados e informações inerentes ao negócio e todas as visões que podem cercar um determinado assunto. É uma ciência que estuda as informações, seu processo de captura, transformação, geração e, posteriormente, análise de dados.',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Visão Computacional',
                    description:
                        'Visão computacional faz parte da inteligência artificial. Uma de suas melhores definições é a seguinte: um corpo de conhecimentos que busca a modelagem artificial da visão humana com o intuito de replicar suas funções, por meio do desenvolvimento de softwares e hardwares avançados.',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Games',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: () => {},
};

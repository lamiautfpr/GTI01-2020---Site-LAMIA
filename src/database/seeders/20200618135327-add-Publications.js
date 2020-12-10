module.exports = {
  up: QueryInterface => {
    QueryInterface.bulkInsert(
      'works',
      [
        {
          id: 17,
          title:
            'Desenvolvendo Estratégias para Melhorar o Planejamento e Agendamento de Ações em Jogos RTS',
          objective:
            `Este artigo descreve técnicas desenvolvidas para gerar e programar ações usando pedido parcial e SLA* na produção de recursos para jogos de estratégia em tempo real (RTS). Os jogos RTS são caracterizados por duas etapas importantes. Na primeira etapa, um plano de ação deve ser executado para a produção de recursos. Na segunda etapa, os recursos produzidos na etapa anterior são empregados em batalhas contra o inimigo. A produção de recursos é vital para o sucesso neste tipo de jogo. Os algoritmos desenvolvidos diminuem o make span, que é o tempo necessário para a execução das ações para atingir a meta de produção de recursos.
            [Ver artigo completo.](https://www.researchgate.net/publication/221417508_Developing_Strategies_for_Improving_Planning_and_Scheduling_of_Actions_in_RTS_Games)
            `,
          date_begin: new Date(2011, 12, 07).toISOString(),
          date_: new Date(2011, 12, 07).toISOString(),
          created_at: new Date(),
          updated_at: new Date(),
          visible: true,
        },
        {
          id: 18,
          title:
            'Produção de recursos em StarCraft com base em busca e planejamento local',
          objective:
            `Este artigo descreve uma abordagem para a produção de recursos em jogos de estratégia em tempo real (RTS Games). Os jogos RTS são uma área de investigação que apresenta desafios interessantes para o planeamento de ações concorrentes, satisfação de pré-condições e gestão de recursos. Em vez de trabalhar com metas fixas para a produção de recursos, nós pretendemos atingir metas que maximizem a produção de recursos em tempo real. A abordagem usa o algoritmo Simulated Annealing (SA) como uma ferramenta de busca para derivar objetivos de produção de recursos. Os autores também desenvolveram um sistema de planejamento que funciona em conjunto com o SA para operar adequadamente em um ambiente de tempo real. A análise do desempenho em comparação com jogadores humanos e bot corrobora para confirmar a eficiência de nossa abordagem e as afirmações que fizemos. [Ver artigo completo.](https://www.researchgate.net/publication/318229496_Resource_Production_in_StarCraft_Based_on_Local_Search_and_Planning)`,
          date_begin: new Date(2006, 08, 01).toISOString(),
          date_end: new Date(2006, 08, 01).toISOString(),
          created_at: new Date(),
          updated_at: new Date(),
          visible: true,
        },
        {
          id: 19,
          title:
            'Combinando Descritores de Textura e Forma para Classificação de Bioimages: Um Caso de Estudo no Conjunto de Dados ImageCLEF Dataset',
          objective:
            `A primeira rodada de experimentos foi realizada com o objetivo de avaliar a contribuição de cada classe dos descritores adotados (forma e textura). A abordagem de recursos baseada em correlação foi aplicada ao vetor de recursos completo (consulte a Seção 3) antes dos métodos de classificação. Como resultado, os recursos foram selecionados a fim de construir um novo vetor de recursos, conforme mostrado na Tabela:

            Tabela 1 . Composição do vetor de recurso considerando todos os recursos e os resultados da seleção de recursos.
            Esses resultados apontam que os recursos de textura são um pouco mais relevantes do que os descritores de forma com relação ao número de recursos selecionados. Contudo, a seleção de recursos indica que ambos eram importantes. Os recursos de textura tem 58% e os descritores de forma têm 42% dos recursos selecionados.

            A fim de avaliar o desempenho dos classificadores em relação ao melhor e as espécies pior classificadas, as cinco espécies com melhores e piores resultados foram selecionados nas Tabelas 3 e 4, respectivamente. A Figura 1 mostra um exemplo para cada das espécies listadas nas Tabelas 3 e 4.

            Tabela 3. As cinco espécies mais bem classificadas
            Tabela 4. As cinco espécies piores classificadas
            Fig. 1. Amostras das espécies melhor e pior classificadas de acordo com as Tabelas 3 e 4.

            O artigo apresenta uma estrutura nova e flexível para o processamento de bioimagem, extração de recursos e classificação. O framework proposto combina características baseadas em textura e forma, melhorando em grande medida a precisão da classificação de imagens biológicas. Além disso, não só permite a fácil adição de novos métodos de processamento, descrição e classificação de imagens, mas também proporciona a avaliação de tais métodos nas mesmas condições. É importante destacar que a grande maioria dos trabalhos na literatura negligencia essa questão. Outro ponto abordado pela abordagem proposta está relacionado à alta dimensionalidade dos vetores de características. A fim de mitigar esse problema, incorporamos um método de seleção de características. Conforme mostrado na seção de experimentos, a abordagem proposta apresentou resultados notáveis ​​ao considerar a classificação das espécies de plantas, chegando a 87,5% de acurácia no caso geral. Considerando cada uma das espécies ele atingiu, em muitos casos, até 100% de acerto. Além disso, a dimensionalidade dos vetores de características foi reduzida em cerca de 4 vezes menos dimensões, diminuindo o custo computacional de classificação. Conseqüentemente, este teste fica a utilidade da abordagem proposta em aplicações biológicas reais.

            [Ver artigo completo.](
              https://www.researchgate.net/publication/258341727_Combining_Texture_and_Shape_Descriptors_for_Bioimages_Classification_A_Case_of_Study_in_ImageCLEF_Dataset)
            `,
          date_begin: new Date(2013, 12, 01).toISOString(),
          date_end: new Date(2013, 12, 01).toISOString(),
          created_at: new Date(),
          updated_at: new Date(),
          visible: true,
        },
        {
          id: 20,
          title:
            'Usando busca e aprendizado para produção de recursos em jogos RTS',
          objective:
            `Os chamados jogos de estratégia em tempo real são caracterizados por duas etapas importantes. Na primeira etapa, um plano de ação deve ser realizado para produzir recursos. Na segunda etapa, os recursos produzidos na etapa anterior são empregados em batalhas contra o inimigo. Produção de recursos é vital para ter sucesso neste tipo de jogo. Este artigo descreve um algoritmo de planejamento e agendamento de ações que proporcionam a coleta de recursos. A ênfase neste artigo é dada à estratégia de agendamento, que é baseada no SLA *. A fim de aumentar a eficiência da programação, algumas estratégias foram desenvolvidas para melhorar o SLA *. Experimentos mostram melhores resultados em comparação com outras abordagens existentes.[Ver artigo completo.](https://www.researchgate.net/publication/267386185_Using_search_and_learning_for_production_of_resources_in_RTS_games)`,
          date_begin: new Date(2012, 05, 02).toISOString(),
          date_end: new Date(2012, 05, 02).toISOString(),
          created_at: new Date(),
          updated_at: new Date(),
          visible: true,
        },
        {
          id: 21,
          title:
            'Segmentação do melanoma cutâneo por abordagem morfológica',
          objective:
            `O câncer de pele é uma doença cuja principal característica é o crescimento celular autônomo e descontrolado. Do ponto de vista médico e dermatológico, costuma-se usar quatro características conhecidas como regras 'ABCD' para identificar e reconhecer se um melanoma é benigno ou maligno: Assimetria, Borda irregular, Cor e Diâmetro variados (maior que 6 mm). A Figura 1-a mostra um nevo estranho típico. A transformação maligna é uma lesão grande com alterações de cor, diâmetro aumentado ou bordas irregulares, conforme mostrado na Figura 1-b. Os cânceres de pele não melanoma são os cânceres de pele mais comuns.
            Figura 1: Exemplos de lesões cutâneas: (a) Nevo benigno - (b) Maligno

            O melanoma maligno é um tumor menos comum de etiologia desconhecida, sendo o mais grave devido à sua capacidade de invadir outras partes do corpo, mesmo que a lesão ainda seja pequena. Portanto, se detectado em estágios iniciais, os resultados do tratamento aumentam.
            [Ver artigo completo.](https://www.researchgate.net/publication/254462568_Skin_melanoma_segmentation_by_morphological_approach)`,
          date_begin: new Date(2012, 09, 01).toISOString(),
          date_end: new Date(2012, 09, 01).toISOString(),
          created_at: new Date(),
          updated_at: new Date(),
          visible: true,
        },
        {
          id: 22,
          title:
            'Uma abordagem de visão computacional para medição automática do espaçamento entre fábricas',
          objective:
            `Após exaustiva pesquisa em conjunto de dados de imagens de lavouras de milho, identificou-se que esse assunto ainda é pouco explorado pela comunidade científica. Assim, um conjunto de dados de imagens foi construído como uma contribuição adicional deste trabalho, que está disponível na url: http://github.com/brilhador/cornspacing.
            O conjunto de dados de imagens é composto por plantas de milho, as quais foram adquiridas através de dispositivo móvel considerando imagens panorâmicas. O processo de aquisição de imagens Uma abordagem de visão computacional para medição automática.
            Figura 1. O processo de aquisição de imagens.

            As imagens foram adquiridas em duas situações distintas: preparo do solo após aplicação de herbicida (TH) e preparo convencional (CT). Nas imagens de CT o solo passa por um preparo mecânico de aração e gradagem. Por outro lado, nas imagens do TH não há preparo mecânico do solo, em que o solo fica coberto com resíduos de diversas culturas utilizadas em sucessão ou rotação. A eliminação de resíduos de colheita e ervas daninhas é realizada com a aplicação de herbicidas. Essas duas classes de imagens são apresentadas na Figura 2.

            (a) e (b) são imagens brutas do conjunto de dados proposto. (c) e (d) são imagens em tons de cinza após realizar COVE. (e) e (f) são imagens binárias após realizar o limiar.

            [Ver artigo completo.](https://www.researchgate.net/publication/283504970_A_Computer_Vision_Approach_for_Automatic_Measurement_of_the_Inter-plant_Spacing)`,
          date_begin: new Date(2015, 12, 01).toISOString(),
          date_end: new Date(2015, 12, 01).toISOString(),
          created_at: new Date(),
          updated_at: new Date(),
          visible: true,
        },
      ],
      {}
    );

    QueryInterface.bulkInsert(
      'categoryWorks_works',
      [
        {
          category_work_id: 3,
          work_id: 17,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_work_id: 3,
          work_id: 18,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_work_id: 3,
          work_id: 19,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_work_id: 3,
          work_id: 20,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_work_id: 3,
          work_id: 21,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_work_id: 3,
          work_id: 22,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
    )

    QueryInterface.bulkInsert(
      'members_works',
      [
        {
          member_id: 2,
          work_id: 17,
          created_at: new Date(),
          updated_at: new Date(),
          responsibility: 'Autor',
        },
        {
          member_id: 2,
          work_id: 18,
          created_at: new Date(),
          updated_at: new Date(),
          responsibility: 'Autor',
        },
        {
          member_id: 15,
          work_id: 19,
          created_at: new Date(),
          updated_at: new Date(),
          responsibility: 'Autor',
        },
        {
          member_id: 2,
          work_id: 20,
          created_at: new Date(),
          updated_at: new Date(),
          responsibility: 'Autor',
        },
        {
          member_id: 3,
          work_id: 21,
          created_at: new Date(),
          updated_at: new Date(),
          responsibility: 'Autor',
        },
        {
          member_id: 15,
          work_id: 22,
          created_at: new Date(),
          updated_at: new Date(),
          responsibility: 'Autor',
        },
      ],
    )
  },

  down: () => {},
};

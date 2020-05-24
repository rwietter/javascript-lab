"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "variables",
      [
        {
          user_id: 1,
          name: "Águia",
          description: `<p style="text-align:center;" dir = "auto"></p>
          <p style="text-align:center;">
                                <img 
                                src="https://app.matheusmallmann.com/static/media/aguia.215b2b58.png" 
                                alt=""
                                style="height: 200px; width: auto;"/>
                            </p>
          <p dir = "auto"></p>
          <p style="text-align:center;" dir = "auto">&nbsp;<strong>Lema:</strong> Fazer diferente.</p>
          <p style="text-align:center;" dir = "auto"><strong>Comportamento:</strong> Pessoas com o perfil da águia são criativas e usam a sua intuição com freqüência para antecipar o futuro, provocar mudanças radicais e inspirar ideias. Essas características fazem com que ela seja impaciente e rebelde, defendendo sempre o novo pelo novo sem se preocupar com o presente.</p>
          <p style="text-align:center;" dir = "auto"><strong>Pontos fortes:</strong> Provocar mudanças radicais; Antecipar o futuro; Criatividade;</p>
          <p style="text-align:center;" dir = "auto"><strong>Pontos de melhoria: </strong>Falta de atenção para o presente; Impaciência e rebeldia;</p>
          <p style="text-align:center;" dir = "auto"><strong>Motivações:</strong> Se sente motivado pela ausência de controles rígidos e ambiente de trabalho descentralizado. É informal, flexível e prima pela liberdade de expressão e para fazer exceções. Está sempre aguardando uma oportunidade para delegar tarefas e detalhes. &nbsp;</p>`,
          type: "test"
        },
        {
          user_id: 1,
          name: "Lobo",
          description: `<p dir = "auto"></p>
          <p style="text-align:center;" dir = "auto">&nbsp;</p>
          <p style="text-align:center;">
                                <img 
                                src="https://app.matheusmallmann.com/static/media/lobo.daaf4d9e.png" 
                                alt=""
                                style="height: 200px; width: auto;"/>
                            </p>
          <p style="text-align:center;" dir = "auto"><strong>Lema: </strong>Fazer certo.</p>
          <p style="text-align:center;" dir = "auto"><strong>Comportamento: </strong>Pessoas com esse perfil são detalhistas e organizadas, não dando um passo sem pensar na estratégia. São pontuais, responsáveis, metódicos e prezam pela consistência, conformidade e qualidade.</p>
          <p style="text-align:center;" dir = "auto"><strong>Pontos fortes:</strong> Pensar a longo prazo; Cumprir com regras e responsabilidades; conformidade e qualidade; lealdade e segurança; regras e responsabilidades;</p>
          <p style="text-align:center;" dir = "auto"><strong>Pontos de melhoria:</strong> Dificuldades de se adaptar às mudanças pode impedir o progresso; detalhista e demasiadamente sistematizado;&nbsp;</p>
          <p dir = "auto"><strong>Motivações:</strong> Esses indivíduos têm a certeza e compreensão exata de quais são as regras, buscam o conhecimento específico do trabalho. Seu objetivo é ver o produto acabado, começo, meio e fim com ausência de riscos e erros.</p>`,
          type: "test"
        },
        {
          user_id: 1,
          name: "Tubarão",
          description: `<p dir = "auto"></p>
          <p style="text-align:center;">
                                <img 
                                src="https://app.matheusmallmann.com/static/media/tubarao.c983e3d4.png" 
                                alt=""
                                style="height: 200px; width: auto;"/>
                            </p>
          <p style="text-align:center;" dir = "auto"><strong>Lema:</strong> Fazer rápido.</p>
          <p style="text-align:center;" dir = "auto"><strong>Comportamento:</strong> Seu senso de urgência é apurado e por isso prima pela ação e iniciativa. As pessoas com perfil de tubarão são motivadas à ação, impulsivos e práticos, porém, não gostam de delegar poder.</p>
          <p style="text-align:center;" dir = "auto"><strong>Pontos fortes:</strong> Fazer com que ocorra; Parar com a burocracia;</p>
          <p style="text-align:center;" dir = "auto"><strong>Pontos de melhoria:</strong> Relacionamento complicado; Fazer do jeito mais fácil;</p>
          <p style="text-align:center;" dir = "auto"><strong>Motivações:</strong> Os indivíduos com esse perfil gostam de liberdade para agir individualmente, controle das próprias atividades, resolver os problemas do seu jeito, competição individual, variedade de atividades e não ter que repetir tarefa.</p>`,
          type: "test"
        },
        {
          user_id: 1,
          name: "Gato",
          description: `<p dir = "auto"></p>
          <p style="text-align:center;">
                                <img 
                                src="https://app.matheusmallmann.com/static/media/gato.916c509c.png" 
                                alt=""
                                style="height: 200px; width: auto;"/>
                            </p>
          <p style="text-align:center;" dir = "auto"><strong>Lema:</strong> Fazer junto.</p>
          <p style="text-align:center;" dir = "auto"><strong>Comportamento: </strong>Pessoas com perfil do gato são sensíveis e têm um bom relacionamento no ambiente empresarial, mantendo a comunicação harmoniosa. Para isso podem esconder conflitos, colocar a felicidade acima dos resultados e manipular através dos sentimentos.</p>
          <p style="text-align:center;" dir = "auto"><strong>Pontos fortes:</strong> Manter comunicação harmoniosa; desenvolver e manter a cultura empresarial; comunicação aberta;</p>
          <p style="text-align:center;" dir = "auto"><strong>Pontos de melhoria:</strong> Esconder conflitos; felicidade acima dos resultados; manipulação através dos sentimentos.</p>
          <p style="text-align:center;" dir = "auto"><strong>Motivações:</strong> Esses indivíduos têm grande aceitação social e facilidade de construir o consenso, o que provoca o reconhecimento da equipe e inspira autoridade no trabalho em equipe.&nbsp;</p>
          <p dir = "auto"></p>`,
          type: "test"
        },
        {
          user_id: 1,
          name: "Pensante",
          description: "",
          type: "test"
        },
        {
          user_id: 1,
          name: "Criativo",
          description: "",
          type: "test"
        },
        {
          user_id: 1,
          name: "Atuante",
          description: "",
          type: "test"
        },
        {
          user_id: 1,
          name: "Lógico",
          description: "",
          type: "test"
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("variables", null, {})
};

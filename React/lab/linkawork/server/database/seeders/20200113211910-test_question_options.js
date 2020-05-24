"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "test_question_options",
      [
        {
          id: 1,
          name: "Idealista, criativo e visionário",
          question_id: 1,
          correct: false
        },
        {
          id: 2,
          name: "Divertido, espiritual e benéfico",
          question_id: 1,
          correct: false
        },
        {
          id: 3,
          name: "Confiável, minucioso e previsível",
          question_id: 1,
          correct: false
        },
        {
          id: 4,
          name: "Focado, determinado e persistente",
          question_id: 1,
          correct: false
        },
        {
          id: 5,
          name: "Ser piloto",
          question_id: 2,
          correct: false
        },
        {
          id: 6,
          name: "Conversar com os passageiros",
          question_id: 2,
          correct: false
        },
        {
          id: 7,
          name: "Planejar a viagem",
          question_id: 2,
          correct: false
        },
        {
          id: 8,
          name: "Explorar novas rotas",
          question_id: 2,
          correct: false
        },
        {
          id: 9,
          name: "Me dê liberdade",
          question_id: 3,
          correct: false
        },
        {
          id: 10,
          name: "Me deixe saber suas expectativas",
          question_id: 3,
          correct: false
        },
        {
          id: 11,
          name: "Lidere, siga ou saia do caminho",
          question_id: 3,
          correct: false
        },
        {
          id: 12,
          name: "Seja amigável, carinhoso e compreensivo",
          question_id: 3,
          correct: false
        },
        {
          id: 13,
          name: "Ter incertezas",
          question_id: 4,
          correct: false
        },
        {
          id: 14,
          name: "Controlar o essencial",
          question_id: 4,
          correct: false
        },
        {
          id: 15,
          name: "Diversão e celebração",
          question_id: 4,
          correct: false
        },
        {
          id: 16,
          name: "Planejar e obter resultados",
          question_id: 4,
          correct: false
        },
        {
          id: 17,
          name: "Estou me exercitando",
          question_id: 5,
          correct: false
        },
        {
          id: 18,
          name: "Tenho novidades",
          question_id: 5,
          correct: false
        },
        {
          id: 19,
          name: "Estou com os outros",
          question_id: 5,
          correct: false
        },
        {
          id: 20,
          name: "Determino as regras",
          question_id: 5,
          correct: false
        },
        {
          id: 21,
          name: "Unidos venceremos, divididos perderemos",
          question_id: 6,
          correct: false
        },
        {
          id: 22,
          name: "O ataque é melhor que a defesa",
          question_id: 6,
          correct: false
        },
        {
          id: 23,
          name: "É bom ser manso, mas tenha um porrete",
          question_id: 6,
          correct: false
        },
        {
          id: 24,
          name: "Um homem prevenido vale por dois",
          question_id: 6,
          correct: false
        },
        {
          id: 25,
          name: "Gerar a ideia global",
          question_id: 7,
          correct: false
        },
        {
          id: 26,
          name: "Fazer com que as pessoas gostem",
          question_id: 7,
          correct: false
        },
        {
          id: 27,
          name: "Fazer com que funcione",
          question_id: 7,
          correct: false
        },
        {
          id: 28,
          name: "Fazer a tarefa",
          question_id: 7,
          correct: false
        },
        {
          id: 29,
          name: "Perguntar do que responder",
          question_id: 8,
          correct: false
        },
        {
          id: 30,
          name: "Ter todos os detalhes",
          question_id: 8,
          correct: false
        },
        {
          id: 31,
          name: "Ter vantagens a meu favor",
          question_id: 8,
          correct: false
        },
        {
          id: 32,
          name: "Que todos tenham a chance de ser ouvido",
          question_id: 8,
          correct: false
        },
        {
          id: 33,
          name: "Fazer progresso",
          question_id: 9,
          correct: false
        },
        {
          id: 34,
          name: "Construir memórias",
          question_id: 9,
          correct: false
        },
        {
          id: 35,
          name: "Fazer sentido",
          question_id: 9,
          correct: false
        },
        {
          id: 36,
          name: "Tornar as pessoas confortáveis",
          question_id: 9,
          correct: false
        },
        {
          id: 37,
          name: "Na frente",
          question_id: 10,
          correct: false
        },
        {
          id: 38,
          name: "Junto",
          question_id: 10,
          correct: false
        },
        {
          id: 39,
          name: "Na hora",
          question_id: 10,
          correct: false
        },
        {
          id: 40,
          name: "Em outro lugar",
          question_id: 10,
          correct: false
        },
        {
          id: 41,
          name: "Consigo fazer muitas coisas",
          question_id: 11,
          correct: false
        },
        {
          id: 42,
          name: "Me divirto com meus amigos",
          question_id: 11,
          correct: false
        },
        {
          id: 43,
          name: "Tudo segue conforme planejado",
          question_id: 11,
          correct: false
        },
        {
          id: 44,
          name: "Desfruto de coisas novas e estimulantes",
          question_id: 11,
          correct: false
        },
        {
          id: 45,
          name: "Uma grande aventura misteriosa",
          question_id: 12,
          correct: false
        },
        {
          id: 46,
          name: "Oportunidade para rever pessoas queridas",
          question_id: 12,
          correct: false
        },
        {
          id: 47,
          name: "Um modo de receber recompensas",
          question_id: 12,
          correct: false
        },
        {
          id: 48,
          name: "Algo que sempre chega muito cedo",
          question_id: 12,
          correct: false
        },
        {
          id: 49,
          name: "Sou um ganhador. Mas há perdedores",
          question_id: 13,
          correct: false
        },
        {
          id: 50,
          name: "Para eu ganhar, ninguém precisa perder",
          question_id: 13,
          correct: false
        },
        {
          id: 51,
          name: "Para ganhar é preciso seguir regras",
          question_id: 13,
          correct: false
        },
        {
          id: 52,
          name: "Para ganhar é necessário inventar novas regras",
          question_id: 13,
          correct: false
        },
        {
          id: 53,
          name: "Explorar novas ideias",
          question_id: 14,
          correct: false
        },
        {
          id: 54,
          name: "Evitar surpresas",
          question_id: 14,
          correct: false
        },
        {
          id: 55,
          name: "Focalizar a meta",
          question_id: 14,
          correct: false
        },
        {
          id: 56,
          name: "Realizar uma abordagem natural",
          question_id: 14,
          correct: false
        },
        {
          id: 57,
          name: "Me der uma vantagem competitiva",
          question_id: 15,
          correct: false
        },
        {
          id: 58,
          name: "For divertido e puder ser compartilhado",
          question_id: 15,
          correct: false
        },
        {
          id: 59,
          name: "Me dar mais liberdade e variedade",
          question_id: 15,
          correct: false
        },
        {
          id: 60,
          name: "Melhorar ou me der mais controle",
          question_id: 15,
          correct: false
        },
        {
          id: 61,
          name: "Se colocar na frente",
          question_id: 16,
          correct: false
        },
        {
          id: 62,
          name: "Colocar os outros na frente",
          question_id: 16,
          correct: false
        },
        {
          id: 63,
          name: "Mudar de ideia",
          question_id: 16,
          correct: false
        },
        {
          id: 64,
          name: "Ser consistente",
          question_id: 16,
          correct: false
        },
        {
          id: 65,
          name: "Pessoas bem-sucedidas",
          question_id: 17,
          correct: false
        },
        {
          id: 66,
          name: "Anciões e conselheiros",
          question_id: 17,
          correct: false
        },
        {
          id: 67,
          name: "Autoridades no assunto",
          question_id: 17,
          correct: false
        },
        {
          id: 68,
          name: "Outros lugares, os mais estranhos",
          question_id: 17,
          correct: false
        },
        {
          id: 69,
          name: "Fazer o que precisa ser feito",
          question_id: 18,
          correct: false
        },
        {
          id: 70,
          name: "Fazer bem feito",
          question_id: 18,
          correct: false
        },
        {
          id: 71,
          name: "Fazer junto com o grupo",
          question_id: 18,
          correct: false
        },
        {
          id: 72,
          name: "Simplesmente fazer",
          question_id: 18,
          correct: false
        },
        {
          id: 73,
          name: "Complexidade, mesmo se confuso",
          question_id: 19,
          correct: false
        },
        {
          id: 74,
          name: "Ordem e sistematização",
          question_id: 19,
          correct: false
        },
        {
          id: 75,
          name: "Calor humano e animação",
          question_id: 19,
          correct: false
        },
        {
          id: 76,
          name: "Coisas claras e simples",
          question_id: 19,
          correct: false
        },
        {
          id: 77,
          name: "Algo que detesto desperdiçar",
          question_id: 20,
          correct: false
        },
        {
          id: 78,
          name: "Um grande período",
          question_id: 20,
          correct: false
        },
        {
          id: 79,
          name: "Uma flecha que leva ao inevitável",
          question_id: 20,
          correct: false
        },
        {
          id: 80,
          name: "Irrelevante",
          question_id: 20,
          correct: false
        },
        {
          id: 81,
          name: "Faria doações para muitas entidades",
          question_id: 21,
          correct: false
        },
        {
          id: 82,
          name: "Criaria uma poupança avantajada",
          question_id: 21,
          correct: false
        },
        {
          id: 83,
          name: "Faria o que desse na cabeça",
          question_id: 21,
          correct: false
        },
        {
          id: 84,
          name: "Exibiria bastante com algumas pessoas",
          question_id: 21,
          correct: false
        },
        {
          id: 85,
          name: "O destino é mais importante que a caminhada",
          question_id: 22,
          correct: false
        },
        {
          id: 86,
          name: "A caminhada é mais importante que o destino",
          question_id: 22,
          correct: false
        },
        {
          id: 87,
          name: "Um centavo economizado é um centavo ganho",
          question_id: 22,
          correct: false
        },
        {
          id: 88,
          name: "Bastam um navio e uma estrela para navegar",
          question_id: 22,
          correct: false
        },
        {
          id: 89,
          name: "Aquele que hesita está perdido",
          question_id: 23,
          correct: false
        },
        {
          id: 90,
          name: "De grão em grão a galinha enche o papo",
          question_id: 23,
          correct: false
        },
        {
          id: 91,
          name: "O que vai, volta",
          question_id: 23,
          correct: false
        },
        {
          id: 92,
          name: "O cego não diferencia sorriso nem careta",
          question_id: 23,
          correct: false
        },
        {
          id: 93,
          name: "É melhor prudência do que arrependimento",
          question_id: 24,
          correct: false
        },
        {
          id: 94,
          name: "A autoridade deve ser desafiada",
          question_id: 24,
          correct: false
        },
        {
          id: 95,
          name: "Ganhar é fundamental",
          question_id: 24,
          correct: false
        },
        {
          id: 96,
          name: "O coletivo é mais importante do que o individual",
          question_id: 24,
          correct: false
        },
        {
          id: 97,
          name: "Não é fácil ficar encurralado",
          question_id: 25,
          correct: false
        },
        {
          id: 98,
          name: "É preferível olhar, antes de pular",
          question_id: 25,
          correct: false
        },
        {
          id: 99,
          name: "Duas cabeças pensam melhor do que uma",
          question_id: 25,
          correct: false
        },
        {
          id: 100,
          name: "Se não sabe competir, fique em casa",
          question_id: 25,
          correct: false
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("test_question_options", null, {})
};

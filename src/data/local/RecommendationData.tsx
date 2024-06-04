import { v4 as uuidv4 } from "uuid";

interface Recommendation {
  id: string;
  name: string;
  description: string;
  date: string;
  imgProfile: string;
  showLink?: string;
  link: string;
  message: string;
}

interface RecommendationData {
  recommendations: Recommendation[];
}

export const recommendationData: RecommendationData = {
  recommendations: [
    {
      id: uuidv4(),
      name: "Victor Silva",
      description: "Desenvolvedor de Software",
      date: "15/09/2022",
      imgProfile:
        "https://media.licdn.com/dms/image/D4D03AQEi9GN8kCmsnw/profile-displayphoto-shrink_100_100/0/1675687049382?e=1722470400&v=beta&t=BkBMjr8qOcs_7YAck7Ai3nRdMbIlnXbNb0YQzlKB4Vg",
      link: "https://www.linkedin.com/in/victor-silva027/",
      message:
        "Recomendo o Mateus pois ele é muito bom em racíocinios lógicos, ótimo para explicar e ensinar códigos aos colegas, sem contar que seu CSS é um dos maiores exemplos por serem tão bons, bom em resolver bugs ou erros de códigos. O Mateus é muito comunicativo e tem muita empatia com as pessoas.",
    },
    {
      id: uuidv4(),
      name: "Mathews Rodrigues",
      description: "Desenvolvedor Full Stack",
      date: "07/02/2023",
      imgProfile: "https://media.licdn.com/dms/image/D4D03AQE0kLHS23Zmgw/profile-displayphoto-shrink_100_100/0/1705257829989?e=1723075200&v=beta&t=y3la-0P3iRhmJeyQOeckhGr4NbfkuShgQRcND6L_W9w",
      link: "https://www.linkedin.com/in/mateushoffman/details/recommendations/",
      showLink: "linkedin.com/in/mathewsrodrigues",
      message: "Trabalhei em um projeto de um app de delivery com o Mateus e gostaria de destacar a comunicação, empatia e colaboração. Sempre resiliente e disposto a ajudar o time, aprendi muito com ele. Tem boa lógica de programação e clean code.",
    },
    {
      id: uuidv4(),
      name: "Luiz de Freitas",
      description: "Full Stack Web Developer",
      date: "15/09/2022",
      imgProfile:
        "https://media.licdn.com/dms/image/D4E35AQE6VVxBWHgQTw/profile-framedphoto-shrink_100_100/0/1680006898528?e=1717682400&v=beta&t=9lLLXElRG0hSi9mU6QwrDWeGm555vnOqzKsNtpAiSDI",
      link: "https://www.linkedin.com/in/mateushoffman/details/recommendations/",
      showLink: "linkedin.com/in/luiz-de-freitas-lima-neto",
      message:
        "O Mateus é um grande desenvolvedor, extremamente inteligente e e sempre disposto a ajudar os colegas. Possui grande afinidade com o código e lógica. Comunicação assertiva e empatia são algumas de suas características, mas destaco principalmente sua lógica de programação!!",
    },
    {
      id: uuidv4(),
      name: "Eliel Oliveira",
      description: "Desenvolvedor Web Fullstack",
      date: "13/09/2022",
      imgProfile: "https://media.licdn.com/dms/image/D4D03AQHIzEGm-MNcrg/profile-displayphoto-shrink_100_100/0/1692828076873?e=1723075200&v=beta&t=iv5yGQD6cHjo9MG1R-qDVO9JQNpXSTGhIlj044xrBxs",
      link: "https://www.linkedin.com/in/mateushoffman/details/recommendations/",
      showLink: "linkedin.com/in/elieloliveira-dev",
      message: "Realizei um projeto em grupo com Mateus de uma aplicação web para jogo de perguntas e respostas. Ele esteve presente em todas as etapas do processo, demonstrou ter muita habilidade técnica. Além de ser muito proativo, organizado e colaborativo.",
    },
    {
      id: uuidv4(),
      name: "Wesley Martins",
      description: "Desenvolvedor FullStack",
      date: "09/09/2022",
      imgProfile: "https://media.licdn.com/dms/image/D4D35AQHDKxSU1UMAiA/profile-framedphoto-shrink_100_100/0/1673890507936?e=1718067600&v=beta&t=VS2F723OQNgvU8hSWMfU74pxMF4JHzXfbjDMopSFVbo",
      link: "https://www.linkedin.com/in/mateushoffman/details/recommendations/",
      showLink: "linkedin.com/in/-wesleymartins",
      message: "Sempre que mencionado ou requisitado o Matheus nunca se negou a ajudar nossos colegas em quaisquer resoluções de problemas. Em varios casos onde estive presente, pude presenciar sua humildade e proatividade para auxiliar nossos colegas.",
    },
    {
      id: uuidv4(),
      name: "Lucas Moura",
      description: "Desenvolvedor Web",
      date: "05/09/2022",
      imgProfile: "https://media.licdn.com/dms/image/D5603AQG97-pV3paoTg/profile-displayphoto-shrink_100_100/0/1705964343880?e=1723075200&v=beta&t=fRt8HzcFDn2pTe-1Z7SSXqBkABRLjW37K7ZOSmsHoAA",
      link: "https://www.linkedin.com/in/mateushoffman/details/recommendations/",
      showLink: "linkedin.com/in/lcsrbr",
      message: "Mateus é inteligente, dedicado, gente finíssima, referência em vários assuntos abordados durante o curso. Não tenho dúvidas que terá um futuro brilhante na área de programação.",
    },
    {
      id: uuidv4(),
      name: "Sally Barzilai Diament",
      description: "Desenvolvedora Full Stack @Mobicity",
      date: "05/09/2022",
      imgProfile: "https://media.licdn.com/dms/image/D4D03AQE5TgaFSpSk8w/profile-displayphoto-shrink_100_100/0/1671509425368?e=1723075200&v=beta&t=nc1LJqoHeS6LtGYqh1Uug-eMQMq4rICQY20HmQOct-s",
      link: "https://www.linkedin.com/in/mateushoffman/details/recommendations/",
      showLink: "linkedin.com/in/sallybdiament",
      message: "O Hoffman (Mateus) é mais que um Dev com altas habilidades técnicas! Sempre pro ativo e disposto a ajudar, foi uma honra por ter tido ele como colega. Extremamente paciente, explica e ensina muito bem. Percebe-se o quanto ele é apaixonado por tecnologia e quanta facilidade tem em aprender novas linguagens/ferramentas/bibliotecas. Aonde ele passar, vai brilhar e voar alto!",
    },
  ],
};

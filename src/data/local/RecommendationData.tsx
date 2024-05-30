import { v4 as uuidv4 } from "uuid";

interface Recommendation {
  id: string;
  name: string;
  description: string;
  date: string;
  imgProfile: string;
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
      name: "Luiz de Freitas",
      description: "Full Stack Web Developer",
      date: "15/09/2022",
      imgProfile:
        "https://media.licdn.com/dms/image/D4E35AQE6VVxBWHgQTw/profile-framedphoto-shrink_100_100/0/1680006898528?e=1717682400&v=beta&t=9lLLXElRG0hSi9mU6QwrDWeGm555vnOqzKsNtpAiSDI",
      link: "https://www.linkedin.com/in/luiz-de-freitas-lima-neto/",
      message:
        "O Mateus é um grande desenvolvedor, extremamente inteligente e e sempre disposto a ajudar os colegas. Possui grande afinidade com o código e lógica. Comunicação assertiva e empatia são algumas de suas características, mas destaco principalmente sua lógica de programação!!",
    },
  ],
};

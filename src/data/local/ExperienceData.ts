import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import logoMuuAgrotech from "../../assets/images/logo_muuagrotech.jpeg";
import logoFreelancer from "../../assets/images/logo_freelancer.jpeg";

interface Position {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  jobType: string;
  imgLogo: string;
  startDate: string;
  endDate: string;
  city: string | null;
  state: string | null;
  country: string;
  tipoDeLocalidade: string;
  positionsInCompany: Position[];
}

interface ExperienceData {
  experiences: Experience[];
}

export const experienceData: ExperienceData = {
  experiences: [
    {
      id: uuidv4(),
      company: "MUU Agrotech",
      jobType: "Tempo integral",
      imgLogo: logoMuuAgrotech.src,
      startDate: "13/03/2023",
      endDate: moment().format("DD/MM/YYYY"),
      city: "Campinas",
      state: "São Paulo",
      country: "Brasil",
      tipoDeLocalidade: "Remota",
      positionsInCompany: [
        {
          id: uuidv4(),
          title: "Desenvolvedor de aplicativos móveis Pleno",
          startDate: "13/07/2023",
          endDate: moment().format("DD/MM/YYYY"),
          description: `● Desenvolvi e integrei uma câmera com um sistema de inteligência artificial para realizar o reconhecimento biométrico de animais.
● Implementei um mapa para renderizar rotas otimizadas, minimizando o tempo de viagem e reduzindo o impacto nos animais transportados.
● Implementei a abordagem "offline first" nos apps, garantindo seu funcionamento perfeito mesmo sem conexão à internet, e sincronizando automaticamente os dados quando a conexão é restabelecida.
● Criei componentes genéricos para simplificar o código, seguindo arquitetura limpa e design pattern, visando facilitar a manutenção.
● Utilizei fortemente a tipagem do TypeScript para detectar e prevenir erros, garantindo estabilidade e consistência no aplicativo.
● Usei Singleton em certas áreas do app para evitar conflitos de dados, garantindo a única instância de objetos.
● Utilizei decorators para melhorar a modularidade e a extensibilidade do código.
● Implementei testes unitários que garantiram a funcionalidade correta e a integridade do código.
● Stacks usadas: Git, TypeScript, React Native, Jest, Realm…`,
        },
        {
          id: uuidv4(),
          title: "Desenvolvedor Full-Stack Júnior",
          startDate: "13/03/2023",
          endDate: "13/07/2023",
          description: `● Desenvolvi projetos responsivos com foco em desempenho, seguindo o Figma.
● Stacks usadas: Git, JavaScript, TypeScript, React.js, Figma, RESTful APIs, Jest, Context API, Node, Express, NoSQL, Appwrite…`,
        },
      ],
    },
    {
      id: uuidv4(),
      company: "Freelancer",
      jobType: "Freelancer",
      imgLogo: logoFreelancer.src,
      startDate: "01/02/2022",
      endDate: moment().format("DD/MM/YYYY"),
      city: null,
      state: null,
      country: "Brasil",
      tipoDeLocalidade: "Remota",
      positionsInCompany: [
        {
          id: uuidv4(),
          title: "Desenvolvedor Web",
          startDate: "01/02/2022",
          endDate: moment().format("DD/MM/YYYY"),
          description: `● Desenvolvi websites responsivos com excelente desempenho, utilizando práticas avançadas de front-end e focando na experiência do usuário.
● Implementei APIs RESTful robustas e desenvolvi algoritmos eficientes para processamento de dados.
● Stacks usadas: Git, JavaScript, TypeScript, React.js, Next.js, TailWind, RESTful APIs, HTML, CSS, Jest, React Testing Library, Redux, Context API, Node, Express, SQL, NoSQL, Docker, Docker compose, Dockerfile, Figma…`,
        },
      ],
    },
  ],
};

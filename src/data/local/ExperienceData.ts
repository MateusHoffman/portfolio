import moment from "moment";
import { v4 as uuidv4 } from "uuid";

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
      imgLogo:
        "https://media.licdn.com/dms/image/D4E0BAQGDIMF0chtozQ/company-logo_100_100/0/1691426534167?e=1724284800&v=beta&t=-TI6N0Wd9-4i2LEjWokI0QFkXmZ_v5DMbq-rStkXLaY",
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
          description: `Participei do desenvolvimento do app Muu Biometria, onde integrei uma câmera com inteligência artificial para reconhecimento biométrico e implementei uma funcionalidade de mapeamento para o cadastro de pastos. Também contribuí para o aplicativo Muu Cargo, implementando um mapa com rotas otimizadas para minimizar o tempo de viagem e reduzir o impacto nos animais, todos os apps seguem o paradigma "offline first".
          \nHabilidades usadas: Git, TypeScript, React Native, Realm...`,
        },
        {
          id: uuidv4(),
          title: "Desenvolvedor Full-Stack Júnior",
          startDate: "13/03/2023",
          endDate: "13/07/2023",
          description: `Desenvolvi projetos responsivos com foco em desempenho, seguindo o Figma.
          \nHabilidades usadas: Git, JavaScript, TypeScript, React.js, Figma, RESTful APIs, Jest, ContextAPI, Node, Express, NoSQL...`,
        },
      ],
    },
    {
      id: uuidv4(),
      company: "Freelancer",
      jobType: "Freelancer",
      imgLogo:
        "https://media.licdn.com/dms/image/D4D0BAQFSEbmwaeNAUw/company-logo_100_100/0/1683928977056/liberoprofessionista_logo?e=1724284800&v=beta&t=B1k2uW3Cx-fYB5q15_7DFYLjnpNsWj8zV31BoHN9PVE",
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
          description: `Desenvolvi websites responsivos com excelente desempenho, utilizando práticas avançadas de front-end e focando na experiência do usuário. Além disso, implementei APIs RESTful robustas e desenvolvi algoritmos eficientes para processamento de dados.
          \nHabilidades usadas: Git, JavaScript, TypeScript, React.js, Next.js, TaildWind, RESTful APIs, Jest, React Testing Library, Redux, ContextAPI, Node, Express, SQL, NoSQL, Docker, Docker compose, Dockerfile...`,
        },
      ],
    },
  ],
};

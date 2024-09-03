import { v4 as uuidv4 } from "uuid";
import univespOficial from "../../assets/images/univespOficial.jpeg";
import estacio from "../../assets/images/estacio.jpeg";
import trybe from "../../assets/images/trybe.jpeg";

export interface Academic {
  id: string;
  imgLogo: string;
  institution: string;
  graduationType: string;
  course: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface AcademicData {
  academics: Academic[];
}

export const academicData: AcademicData = {
  academics: [
    {
      id: uuidv4(),
      imgLogo: univespOficial.src,
      institution: "Univesp Oficial",
      graduationType: "Bacharelado",
      course: "Engenharia de Computação",
      startDate: "01/07/2024",
      endDate: "01/07/2029",
      description: `Durante meu curso de Engenharia de Computação na UNIVESP, estou adquirindo uma sólida base em áreas essenciais como algoritmos, programação, cálculo, física e estatística. Aprendi a desenvolver softwares, tanto para web quanto para dispositivos móveis, compreendendo desde a programação orientada a objetos até sistemas embarcados e comunicação IoT. Além disso, estudei fundamentos de bancos de dados, engenharia de software e infraestrutura de sistemas, o que me capacitou a criar soluções escaláveis e eficientes. Com disciplinas voltadas para controle, automação e compiladores, estou preparado para enfrentar desafios complexos no campo da tecnologia.`
    },
    {
      id: uuidv4(),
      imgLogo: estacio.src,
      institution: "Estácio",
      graduationType: "Bacharelado",
      course: "Ciência da Computação",
      startDate: "01/01/2024",
      endDate: "01/12/2027",
      description: `Durante meu curso de Ciências da Computação na Estácio, estou adquirindo conhecimentos amplos em redes de computadores, sistemas de informação, desenvolvimento de software e segurança da informação. Aprendi programação avançada, matemática computacional, estruturas de dados e sistemas operacionais. Explorei áreas como inteligência artificial, computação em nuvem, internet das coisas e programação para dispositivos móveis, preparando-me para criar soluções inovadoras e seguras na área de tecnologia.`
    },
    {
      id: uuidv4(),
      imgLogo: trybe.src,
      institution: "Trybe",
      graduationType: "Curso",
      course: "Desenvolvimento Web, Full Stack",
      startDate: "01/03/2022",
      endDate: "01/03/2023",
      description: `Trybe ensina Front-end, Back-end, Ciência da Computação, Engenharia de software, Aprender a Aprender, Metodologias ágeis e por fim e não menos importante Soft skills.`
    },
  ],
};

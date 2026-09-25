import { Message } from "@/lib/types";

export const messages: Message[] = [
  {
    id: "m1",
    author: "Ana Clara Ferreira",
    relation: "Aluna",
    content:
      "Vou sentir falta até das provas de segunda-feira de manhã. Obrigada por três anos que passaram rápido demais.",
    photo: "/mock/ana-clara.jpg",
  },
  {
    id: "m2",
    author: "Marisa Coutinho",
    relation: "Professora de Literatura",
    content: "Turma que discute livro até depois do sinal bater é turma que eu não esqueço. Sucesso pra todos.",
    photo: "/mock/prof-marisa.jpg",
  },
  {
    id: "m3",
    author: "Diego Martins",
    relation: "Aluno",
    content: "Valeu por aguentarem meus atrasos por três anos. Prometo chegar na hora daqui pra frente. Prometo mesmo.",
    photo: "/mock/diego-martins.jpg",
  },
  {
    id: "m4",
    author: "Eduardo Pontes",
    relation: "Professor de Matemática",
    content: "De uma sala que reclamava de fórmula pra uma sala que resolveu tudo sozinha. Foi bom ver isso acontecer.",
    photo: "/mock/prof-eduardo.jpg",
  },
];

import { Teacher } from "@/lib/types";

export const teachers: Teacher[] = [
  {
    id: "prof-marisa",
    name: "Marisa Coutinho",
    photo: "/mock/prof-marisa.jpg",
    subject: "Literatura",
    yearsAtSchool: 12,
    message:
      "Essa turma discutia mais do que lia às vezes — mas discutia bem. Levem essa vontade de questionar pra onde forem.",
  },
  {
    id: "prof-eduardo",
    name: "Eduardo Pontes",
    photo: "/mock/prof-eduardo.jpg",
    subject: "Matemática",
    yearsAtSchool: 8,
    message: "Vocês reclamaram de toda fórmula que passei, e mesmo assim aprenderam todas. Orgulho de vocês.",
  },
  {
    id: "prof-renata",
    name: "Renata Lima",
    photo: "/mock/prof-renata.jpg",
    subject: "História",
    yearsAtSchool: 15,
    message: "Ano que vem vocês fazem história em outro lugar. Não esqueçam de onde vieram.",
  },
];

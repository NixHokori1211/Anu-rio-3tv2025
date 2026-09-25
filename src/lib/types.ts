export type Student = {
  id: string;
  name: string;
  nickname?: string;
  photo: string;
  className: string;
  description: string;
  quote: string;
  memories: string[];
};

export type Teacher = {
  id: string;
  name: string;
  photo: string;
  subject: string;
  yearsAtSchool: number;
  message: string;
};

export type Moment = {
  id: string;
  title: string;
  date: string;
  description: string;
  photo: string;
};

export type GalleryItem = {
  id: string;
  photo: string;
  caption: string;
  tag: "turma" | "eventos" | "aulas" | "bastidores";
};

export type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  description: string;
};

export type Message = {
  id: string;
  author: string;
  relation: string;
  content: string;
  photo?: string;
};

export type ClassStat = {
  label: string;
  value: string;
};

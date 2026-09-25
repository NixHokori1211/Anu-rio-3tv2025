import { Student, Teacher } from "@/lib/types";

export type PersonCardData = {
  id: string;
  name: string;
  nickname?: string;
  role: string;
  description: string;
  note: string;
  photo: string;
};

export function studentToPersonCard(student: Student): PersonCardData {
  return {
    id: student.id,
    name: student.name,
    nickname: student.nickname,
    role: `Aluno(a) · ${student.className}`,
    description: student.description,
    note: student.quote,
    photo: student.photo,
  };
}

export function teacherToPersonCard(teacher: Teacher): PersonCardData {
  return {
    id: teacher.id,
    name: teacher.name,
    role: `Professor(a) de ${teacher.subject}`,
    description: `${teacher.yearsAtSchool} anos nesta escola.`,
    note: teacher.message,
    photo: teacher.photo,
  };
}

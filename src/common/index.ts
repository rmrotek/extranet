import { Role } from "../types";

export const roles: Role[] = ['ADMIN', 'STUDENT', 'TEACHER'];

export const rolesMapped: { [key in Role]: string } = {
  ADMIN: 'Admin',
  STUDENT: 'Student',
  TEACHER: 'Nauczyciel',
};
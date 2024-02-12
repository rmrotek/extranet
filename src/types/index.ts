import { Moment } from 'moment';
import { Event } from 'react-big-calendar';

export interface UserBasic {
  id: string;
  name: string;
  lastName: string;
  street: string;
  buildingNo: string | number;
  apartmentNo: string | number;
  postalCode: string | number;
  city: string;
  phone: number | string;
  email: string;
  role: Role;
}

export interface UserExtended extends UserBasic {
  groupId?: string; // only role=student
}
export interface UserExtendedWithPassword extends UserExtended {
  password: string;
}

export type Role = 'ADMIN' | 'STUDENT' | 'TEACHER';

export interface GroupBasic {
  id: string;
  title: string;
}

export interface GroupExtended extends GroupBasic {
  users: string[]; // user id array
  plan: PlanSubject[];
}

export interface Subject {
  id: string;
  title: string;
}

export interface PlanSubject {
  id: string;
  start: Moment;
  end: Moment;
  userId: string; // only role=teacher
  roomNo: string | number;
  subjectId: string; // id from Subject
}
export interface PlanSubjectAPI extends Omit<PlanSubject, 'start' | 'end'> {
  start: number;
  end: number;
}

export interface GroupAPI extends Omit<GroupExtended, 'plan'> {
  plan: PlanSubjectAPI[];
}

export interface CustomCalendarEvent extends Event {
  id: string | number;
  roomNo: string | number;
  teacher?: string;
}

export interface LoginInForm {
  email: string;
  password: string;
}

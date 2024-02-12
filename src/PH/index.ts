import moment from 'moment';
import {
  CustomCalendarEvent,
  GroupBasic,
  PlanSubject,
  Subject,
  UserExtended,
} from '../types';

export const PH_USER: UserExtended = {
  id: '1',
  name: 'name test',
  lastName: 'last name test',
  street: 'test street',
  buildingNo: '2A',
  apartmentNo: '3',
  city: 'test city',
  email: 'test@email.test',
  groupId: 'testgrpid1',
  phone: 123123123,
  postalCode: 11111,
  role: 'STUDENT',
};

export const PH_USERS: UserExtended[] = [
  {
    id: '1',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '2',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
  {
    id: '3',
    name: 'name test',
    lastName: 'last name test',
    street: 'test street',
    buildingNo: '2A',
    apartmentNo: '3',
    city: 'test city',
    email: 'test@email.test',
    groupId: 'testgrpid1',
    phone: 123123123,
    postalCode: 11111,
    role: 'STUDENT',
  },
];

export const PH_GROUP: GroupBasic = {
  id: 'testid',
  title: 'Grupa 1',
};

export const PH_GROUPS: GroupBasic[] = [
  {
    id: 'testid1',
    title: 'Grupa 1',
  },
  {
    id: 'testid2',
    title: 'Grupa 2',
  },
  {
    id: 'testid3',
    title: 'Grupa 3',
  },
  {
    id: 'testid4',
    title: 'Grupa 4',
  },
];

export const PH_SUBJECT: Subject = {
  id: 'testid1',
  title: 'Przedmiot 1',
};

export const PH_SUBJECTS: Subject[] = [
  {
    id: 'testid1',
    title: 'Przedmiot 1',
  },
  {
    id: 'testid2',
    title: 'Przedmiot 2',
  },
  {
    id: 'testid3',
    title: 'Przedmiot 3',
  },
  {
    id: 'testid4',
    title: 'Przedmiot 4',
  },
];

export const PH_PLAN: PlanSubject[] = [
  {
    id: '1',
    start: moment(),
    end: moment(),
    subjectId: 'testid1',
    roomNo: '102',
    userId: '',
  },
];

export const PH_EVENTS: CustomCalendarEvent[] = [
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: new Date(new Date().setHours(new Date().getHours() - 4)),
    end: new Date(new Date().setHours(new Date().getHours() - 3)),
  },
];

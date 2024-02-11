import { Role } from '../types';

export const roles: Role[] = ['ADMIN', 'STUDENT', 'TEACHER'];

export const rolesMapped: { [key in Role]: string } = {
  ADMIN: 'Admin',
  STUDENT: 'Student',
  TEACHER: 'Nauczyciel',
};

export const calendarTranslations = {
  en: null,
  'en-GB': null,
  pl: {
    week: 'Tydzień',
    day: 'Dzień',
    month: 'Miesiąc',
    previous: 'Wcześniej',
    next: 'Później',
    today: 'Dzisiaj',
    agenda: 'Agenda',

    showMore: (total: any) => `+${total} więcej`,
  },
};


export const dateFormatString = 'DD MM YYYY kk mm'
import { GroupAPI, GroupExtended, Role } from '../types';

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

export const dateFormatString = 'DD/MM/YYYY kk:mm';

type AnyObject<TValue> = { [key: string]: TValue };
type StringKeys<T> = {
  [K in keyof T]: T[K] extends string | number | symbol ? K : never;
}[keyof T];

export const arrayToKeyObject = <
  T extends Record<StringKeys<T>, string | number | symbol>,
  TKeyName extends keyof Record<StringKeys<T>, string | number | symbol>
>(
  array: T[],
  key: TKeyName
): Record<T[TKeyName], T> =>
  Object.fromEntries(array.map((a) => [a[key], a])) as Record<T[TKeyName], T>;

export const convertGroupToApi = (groupData: GroupExtended): GroupAPI => {
  const grpApi: GroupAPI = {
    ...groupData,
    plan: groupData.plan.map((pln) => {
      return {
        ...pln,
        end: pln.end.unix(),
        start: pln.start.unix(),
      }
    })
  }
  return grpApi
}

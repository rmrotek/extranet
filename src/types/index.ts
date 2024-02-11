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
  role: Role
}

export interface UserExtended extends UserBasic {
  groupId?: string // only role=student
}

export type Role = 'ADMIN' | 'STUDENT' | 'TEACHER'

export interface GroupBasic {
  id: string
  title: string
}

export interface GroupExtended extends GroupBasic {
  users: UserExtended
  plan: PlanSubject[]
}

export interface Subject {
  id: string
  title: string
}

export interface PlanSubject extends Subject {
  start: Date
  end: Date
  userId?: string // only role=teacher
  roomNo: string | number
}
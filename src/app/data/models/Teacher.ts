import { WeekAvailability } from './Availability';

export interface Teacher {
  titleID: string;
  name: string;
  studyField: number;
  availability: WeekAvailability;
}

export interface TeacherAPI extends Teacher {
  id: number;
}

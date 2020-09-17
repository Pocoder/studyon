import { Studyon } from './studyon';

export class User {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  studyons: Studyon[];
}

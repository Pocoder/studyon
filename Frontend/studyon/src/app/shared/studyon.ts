import { User } from './user';
import { Discussion } from './discussion';

export class Studyon {
  _id: string;
  title: string;
  members: User[];
  discussions: Discussion[];
}

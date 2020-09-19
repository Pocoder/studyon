import { User} from './user';

export class Message {
  _id: string;
  text: string;
  author: User;
  date: string;
}

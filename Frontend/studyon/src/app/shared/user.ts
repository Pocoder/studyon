
export class User {
  _id: string;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  featured: boolean;
  description: string;
  comments: Comment[];
}

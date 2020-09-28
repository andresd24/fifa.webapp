import { User } from './user';

export class Team {
  constructor(
    public _id: string,
    public name: String,
    public country: String,
    public league: String,
    public year: Number,
    public image: String,
    public user: User
  ) {}
}

import { Item } from '../interfaces/item';

export class User implements Item {
  id;
  name;

  constructor(data) {
    if (data) {
      this.id = data._id;
      this.name = data.email;
    }
  }
}

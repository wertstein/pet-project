import { Item } from '../interfaces/item';

export class User implements Item {
  id;
  email;
  name;

  constructor(data?) {
    if (data) {
      this.id = data._id;
      this.email = data.email;
    }
  }
}

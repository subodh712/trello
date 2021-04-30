import { v4 as uuidv4 } from 'uuid';

export class List {
  title: string;
  items: Array<Item>
  id: string;

  constructor(title: string, items: Array<Item>) {
    this.title = title;
    this.items = items;
    this.id= uuidv4();
  }
}

export class Item {
  title: string;
  description: string;
  id: string;

  constructor(title:string, description: string) {
    this.title = title;
    this.description = description;
    this.id= uuidv4();
  }
}

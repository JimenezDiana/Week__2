import { Person } from "./Personn";

export class Contacts {
  public people: Person[];

  constructor() {
    this.people = [];
  }

  public printCalendar(): void {
    console.log(this.people);
  }
}

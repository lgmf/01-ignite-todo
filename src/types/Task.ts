export class Task {
  id: string;
  title: string;
  done: boolean;

  constructor(title: string) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.done = false;
  }
}

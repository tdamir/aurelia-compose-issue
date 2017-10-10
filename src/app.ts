import { autoinject } from "aurelia-dependency-injection";
import { State } from "./state";

@autoinject()
export class App {
  items: Array<string>;

  constructor(public state: State) {
  }

  activate() {
    this.items = this.getData();
  }

  getData(): Array<string> {
    let items: Array<string> = [];
    for (let i = 0; i < 1000; i++) {
      items.push(i.toLocaleString());
    }
    return items;
  }

}


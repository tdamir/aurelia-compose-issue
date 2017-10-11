import { autoinject } from "aurelia-dependency-injection";
import { State } from "./state";

@autoinject()
export class App {
  items: Array<ItemModel>;
  itemsCount: number = 100;

  constructor(public state: State) {
  }

  activate() {
    this.items = this.getData();
  }

  getData(): Array<ItemModel> {
    let items: Array<ItemModel> = [];
    for (let i = 0; i < this.itemsCount; i++) {
      items.push(new ItemModel(i.toLocaleString()));
    }
    return items;
  }

  recreate() {
    this.state.activateCalls = 0;
    this.state.bindCalls = 0;
    this.items = null;
    this.items = this.getData();
  }
}

export class ItemModel {

  constructor(public text: string) {
   
  }
}


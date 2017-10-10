import { inlineView } from "aurelia-templating";
import { autoinject } from "aurelia-dependency-injection";
import { State } from "./state";

@autoinject()
@inlineView('<template>${text}</template>')
export class Item2 {
  text: string;

  constructor(private state: State) {

  }

  activate(text: string) {
    this.text = text;
    this.state.activateCalls++;
    // console.log(`${this.text}`);
  }

  bind() {
    this.state.bindCalls++;
  }
}


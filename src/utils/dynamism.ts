export default class Dynamism {
  constructor() {
    this.source = null;
    this.targets = [];
    this.event = "defaultEvent";
    this.enabled = null;
  }

  get source() {
    return this.source;
  }
}

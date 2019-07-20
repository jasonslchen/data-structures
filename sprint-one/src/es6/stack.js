class Stack {

  constructor() {
    this.counter = 0;
  }

  push(value) {
    this[this.counter] = value;
    this.counter++;
  }

  pop() {
    let indexToDelete = this.counter - 1;
    let deleted = this[indexToDelete];
    delete this[indexToDelete];
    this.counter--;
    return deleted;
  }

  size() {
    return Math.max(0, this.counter);
  }

}
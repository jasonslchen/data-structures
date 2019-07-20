class Queue {

  constructor() {
    this.max = 0;
    this.min = 0;
  }

  enqueue(value) {
    this[this.max] = value;
    this.max++;
  }

  dequeue() {
    let deleted = this[this.min];
    delete this[this.min];
    this.min++;
    return deleted;
  }

  size() {
    return Math.max(0, this.max - this.min);
  }

}

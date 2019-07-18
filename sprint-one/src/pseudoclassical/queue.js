var Queue = function() {
  this.max = 0;
  this.min = 0;
};

Queue.prototype.enqueue = function(val) {
  this[this.max] = val;
  this.max++;
};

Queue.prototype.dequeue = function() {
  let indexToDelete = this.min;
  let deleted = this[indexToDelete];
  delete this[indexToDelete];
  this.min++;
  return deleted;
};

Queue.prototype.size = function() {
  return Math.max(0, this.max - this.min);
};

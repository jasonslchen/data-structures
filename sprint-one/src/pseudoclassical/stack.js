var Stack = function() {
  this.counter = 0;

};

Stack.prototype.push = function(value) {
  this[this.counter] = value;
  this.counter++;
};

Stack.prototype.pop = function() {
  let indexToDelete = this.counter - 1;
  let deleted = this[indexToDelete];
  delete this[indexToDelete];
  this.counter--;
  return deleted;
};

Stack.prototype.size = function() {
  return Math.max(0, this.counter);
};



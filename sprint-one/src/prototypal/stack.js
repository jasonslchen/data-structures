var Stack = function() {
  let storage = Object.create(stackMethods);

  return storage;
};

var stackMethods = {
  push: function(val) {
    this[this.count] = val;
    this.count++;
  },

  pop: function() {
    let indexToDelete = this.count - 1;
    let deleted = this[indexToDelete];
    delete this[indexToDelete];
    this.count--;
    return deleted;

  },

  size: function() {
    return Math.max(0, this.count);
  },

  count: 0
};



var Queue = function() {
  let storage = {};

  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {
  max: 0,

  min: 0,

  enqueue: function(val) {
    this[this.max] = val;
    this.max++;
  },

  dequeue: function(val) {
    let indexToDelete = this.min;
    let deleted = this[indexToDelete];
    delete this[indexToDelete];
    this.min++;
    return deleted;

  },

  size: function() {
    return Math.max(0, this.max - this.min);
  }
};



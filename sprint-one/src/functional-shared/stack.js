var Stack = function() {
  let storage = {};

  _.extend(storage, stackMethods);

  return storage;
};

var stackMethods = {
  push: function (val) {
    this[this.count] = val;
    this.count++;
  },
  pop: function () {
    debugger;
    let indexToDelete = this.count - 1;
    let deletee = this[indexToDelete];
    delete this[indexToDelete];
    this.count--;
    return deletee;
  },
  size: function () {
    return Math.max(0, this.count);
  },
  count: 0
};




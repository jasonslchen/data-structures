var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  let max = 0;
  let min = 0;

    someInstance.enqueue = function(value) {
      storage[max] = value;
      max++;
    };

    someInstance.dequeue = function() {
      let deletee = storage[min];
      delete storage[min];
      min++;
      return deletee;
    };

    someInstance.size = function() {
      return Math.max(0, max - min);
    };

  return someInstance;
};

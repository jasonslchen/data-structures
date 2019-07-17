var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage.count = value;
    count++;

  };

  someInstance.pop = function() {
    let deleted = storage.count;
    delete storage.count;
    count--;
    return deleted;

  };

  someInstance.size = function() {
    if (count < 0) {
      count = 0;
    }
    return count;
  };

  return someInstance;
};

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0;
  let deleted;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
    console.log(storage);
    console.log(count);

  };

  someInstance.pop = function() {
    let index = count - 1;
    deleted = storage[index];
    delete storage[index];
    count--;
    // console.log(count);
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

// stack = Stack();

// console.log(stack.push('a'));
// console.log(stack.push('b'));
// console.log(stack.push('c'));
// console.log(stack.pop());
// console.log(stack.pop());
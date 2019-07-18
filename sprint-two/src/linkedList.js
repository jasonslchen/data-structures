var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = list.head;
    }
    list.tail.next = newNode;
    list.tail = newNode;
    return newNode;
  };

  list.removeHead = function() {
    if (!list.head) {
      return undefined;
    }
    var temp = list.head;
    list.head = list.head.next;

    return temp.value;
  };

  list.contains = function(target) {
    var current = list.head;

    while(current){
      if (current.value !== target){
        current = current.next;
      }else{
        return true;
      }
    }
    return false;


    // let findValue = function(item) {
    //   let found = false;
    //   if (item.value === target) {
    //     found = true;
    //   } else if (item.next) {
    //     found = findValue(item.next);
    //   }
    //   return found;
    // }

    // return findValue(current);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 addTail() = O(1);
 removeHead() = O(1);
 contains = O(n);

 */

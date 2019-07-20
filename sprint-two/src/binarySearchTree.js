var BinarySearchTree = function(value) {
  let BST = Object.create(BSTMethods);

  BST.value = value;
  BST.left = null;
  BST.right = null;

  return BST;

};

let BSTMethods = {};

BSTMethods.insert = function(val) {

  if (val < this.value) {
    if (!this.left) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }

  if (val > this.value) {
    if (!this.right) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }

  if (val === this.value) {
    return 'value already present';
  }

}

BSTMethods.contains = function(val) {
  // let result = false;
  if (val === this.value) {
    return true;
  } else if (val < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(val);
    }
  } else if (val > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(val);
    }
  }




}

BSTMethods.depthFirstLog = function(cb) {
  if (this.value) {
    cb(this.value);
  }

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }

}
/*
 * Complexity: What is the time complexity of the above functions?
 all are O(n);
 */

// let tree = BinarySearchTree(5);

// tree = {
//   left:
//   right:
//   value:
// }

// tree.insert();



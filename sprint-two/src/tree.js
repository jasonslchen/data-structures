var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var treeNode = Tree(value);
  this.children.push(treeNode);
 };

treeMethods.contains = function(target) {
  var result = false;
  function helper(node){
    if (node.value === target){
      result = true;
    }
    if (node.children) {
      node.children.forEach(function(node){
        helper(node);
      });
    }
  }
  helper(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild(): O(1);
 contains(): O(n);
 */

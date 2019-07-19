

// Instantiate a new graph
var Graph = function() {
  // this = Object.create(graph.prototype)
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.nodes[node]) {
    this.nodes[node] = node;
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //check if key [node] is in object nodes
  // if yes return true
  if (this.nodes[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  delete this.edges[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.edges[fromNode] && this.edges[toNode]){
    return true;
  }else{
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.edges[fromNode]){
    this.edges[fromNode] = fromNode;
  }
  if (!this.edges[toNode]){
    this.edges[toNode] = toNode;
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode];
  delete this.edges[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes){
    cb(this.nodes[node]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



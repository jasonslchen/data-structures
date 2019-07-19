

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
  for(var key in this.edges) {
    delete this.edges[key][node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // debugger;
  if (this.edges[fromNode][toNode] && this.edges[toNode][fromNode]){
    return true;
  }else{
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.edges[fromNode]){
    this.edges[fromNode] = {}
    this.edges[fromNode][toNode] = toNode;
  } else {
    this.edges[fromNode][toNode] = toNode;
  }

  //edge{a: a, b: b, c: c }
  if (!this.edges[toNode]){
    this.edges[toNode] = {}
    this.edges[toNode][fromNode] = fromNode;
  } else {
    this.edges[toNode][fromNode] = fromNode;
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode][toNode];
  delete this.edges[toNode][fromNode];
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



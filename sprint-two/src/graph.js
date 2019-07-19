

// Instantiate a new graph
var Graph = function() {
  // this = Object.create(graph.prototype)
  this.nodes = {};
  this.edge = {
    // a : [b, c]
  };
  // return this;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //checks to see if node is in this.nodes, if not add this.nodes[node] = node;
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
  //check if key[node] is in object nodes,
  //if yes remove the node
  if (this.nodes[node]) {
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //graph.edges
  // if(_.indexOf(this.edge[fromNode], toNode) !== -1) {
  //   return true;
  // }
  // return false;
  debugger;
  return _.contains(this.edge[fromNode], toNode);

  // if (this.edge[fromNode][toNode] === toNode) {
  //   return true;
  // }
  // return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // this.edge[fromNode] = [toNode]
  if (!this.edge[fromNode]) {
    this.edge[fromNode] = [toNode];

    // this.edge[fromNode] = {toNode: toNode};
  } else {
    this.edge[fromNode].push(toNode);
    // this.edge[fromNode][toNode] = toNode;
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  debugger;
  let index = _.indexOf(this.edge[fromNode], toNode);
  this.edge[fromNode].splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



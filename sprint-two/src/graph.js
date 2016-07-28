

// Instantiate a new graph
var Graph = function() {
  this.counter = 0;
  this.storage = {};
  this.connections = {};
};

// connections = {1: [2, 3], 2: [1], 3: [1]}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.counter++;
  this.storage[this.counter] = node;
  this.connections[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var has = false;
  for (var i in this.storage) {
    if (node === this.storage[i]) {
      return has = true;
    }
  }
  return has;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var deleted, deleteKey;
  _.each(this.storage, function(item, key) {
    if (item === node) {
      deleted = node;
      deleteKey = key;
    }
  });
  delete this.storage[deleteKey];
  delete this.connections[node];
  var connections = this.connections;
  _.each(this.connections, function (nodeEdges, i) {
    connections[i] = _.reject(nodeEdges, function (edge) {
      if (edge === node) {
        return true;
      }
      return false;
    });
  });
  return deleted;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (_.contains(this.connections[fromNode], toNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.connections[fromNode].push(toNode);
  this.connections[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var containsEdge = function(edge) {
    if (edge === toNode || edge === fromNode) {
      return true;
    }
    return false;
  };
  this.connections[fromNode] = _.reject(this.connections[fromNode], containsEdge);
  this.connections[toNode] = _.reject(this.connections[toNode], containsEdge);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.storage, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



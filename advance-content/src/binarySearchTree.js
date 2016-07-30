var BinarySearchTree = function(value) {
  _.extend(this, Child(value));
};

BinarySearchTree.prototype.insert = function (val) {
  var child = Child(val);
  var searchTree = function (node) {
    if (node.value > val) {
      if (node.left === null) {
        node.left = child;
      } else {
        searchTree(node.left);
      }
    } else {
      if (node.right === null) {
        node.right = child;
      } else {
        searchTree(node.right);
      }
    }
  };
  searchTree(this);
};

BinarySearchTree.prototype.contains = function (val) {
  var has = false;
  var searchTree = function (node) {
    if (node.value === val) {
      return has = true;
    }
    if (node.value > val) {
      if (node.left !== null) {
        searchTree(node.left);
      }
    } else {
      if (node.right !== null) {
        searchTree(node.right);
      }
    }
  };
  searchTree(this);
  return has;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {

  var iterator = function (node) {
    callback(node.value);
    if (node.left) {
      iterator(node.left);
    }
    if (node.right) {
      iterator(node.right);
    }
  };
  iterator(this);
};

BinarySearchTree.prototype.breadthFirstLog = function (callback) {

  // queue at top value
  // queue left value and right value
  // queue left's children then right's children
  // search through queue
  var queue = [];
  queue.push(this);
  var oldLength = 0;

  while ( oldLength !== queue.length) {
    var startIndex = oldLength;
    oldLength = queue.length;
    queue.slice(startIndex).forEach(function (node) {
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    });
  }
  queue.forEach(function (node) {
    callback(node.value);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
var Child = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};
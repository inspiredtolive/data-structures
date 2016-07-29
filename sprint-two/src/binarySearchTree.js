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
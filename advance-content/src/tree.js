var Tree = function(value, parent) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.parent = null;
  if (parent !== undefined) {
    newTree.parent = parent;
  }

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var parent = this; 
  var child = Tree(value, parent);
  this.children.push(child);  // fix me
};

treeMethods.contains = function(target) {

  var searchTree = function (allTrees) {
    var has = false;
    if (allTrees.value === target) {
      return true;
    } else {
      _.each(allTrees.children, function (child) {
        if (searchTree(child)) {
          has = true;
        }
      });
    }
    return has;
  };

  return searchTree(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

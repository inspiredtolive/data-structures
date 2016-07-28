var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var child = Tree(value);
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

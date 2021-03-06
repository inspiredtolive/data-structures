var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list.tail = Node(value);
    if (list.head === null) {
      list.head = list.tail;
    } else {
      list.head.next = list.tail;
    }
  };

  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next;
    return formerHead;
  };

  list.contains = function(target) {
    var has = false;
    var searchNode = function (node) {
      if (node.value === target) {
        has = true;
      } else if (node.next !== null) {
        searchNode(node.next);
      }
    };
    searchNode(list.head);
    return has;
  };

  list.getHead = function() {
    return list.head;
  };

  list.getValue = function(key) {
    var value;
    var searchNode = function (node) {
      if (node.value.hasOwnProperty(key)) {
        value = node.value[key];
      } else if (node.next !== null) {
        searchNode(node.next);
      }
    };
    if (list.head === null) {
      return undefined;
    }
    searchNode(list.head);
    return value;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  var Node = function(value) {
    var node = {};

    node.value = value;
    node.next = null;

    return node;
  };

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



/*
 * Complexity: What is the time complexity of the above functions?
 */



var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

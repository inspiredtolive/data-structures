var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size - 1] = value;
    return storage[size - 1];
  };

  someInstance.dequeue = function() {
    size = size > 0 ? size -= 1 : 0;
    var dequeued = storage[0];
    for (var key = 0; key < size + 1; key++) {
      var val = storage[key];
      delete storage[key];
      storage[key - 1] = val;
      delete storage[-1];
    }
    return dequeued;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};



var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
  this.resizing = false;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = {};
  obj[k] = v; 
  var retrieved = this._storage.get(index);
  var list = LinkedList();
  list.addToTail(obj);

  if (retrieved === undefined) {
    this._storage.set(index, list);
    this.counter++;

  } else if (retrieved.getValue(k) !== undefined) {
    this._storage.set(index, list);

  } else {
    retrieved.addToTail(obj);
    this._storage.set(index, retrieved);
    this.counter++;
  }
  if (this.resizing === false) {
    if (this.counter >= Math.round(this._limit * 0.75)) {
      this.resize(this._limit * 2);
    } 
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieved = this._storage.get(index);
  if (retrieved === undefined) {
    return undefined;
  }
  return retrieved.getValue(k);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieved = this._storage.get(index);
  var list = LinkedList();
  var removed;
  while (retrieved.getHead() !== null) {
    var obj = retrieved.removeHead();
    if (!obj.hasOwnProperty(k)) {
      list.addToTail(obj);
    } else {
      this.counter--;
      removed = obj[k];
    }
  }
  if (list.head === null) {
    list = undefined;
  }
  this._storage.set(index, list);

  if (this.resizing === false) {
    if (this.counter <= Math.round(this._limit * 0.25)) {
      if (this._limit > 8) {
        this.resize(this._limit / 2);
      } 
    }
  }

  return removed;
};

HashTable.prototype.resize = function(newLimit) {
  // store old LimitedArray
  // replace with empty one
  // fill with values from old limitedArray;
  this.resizing = true;
  var oldArray = this._storage;
  this._storage = LimitedArray(newLimit);
  this._limit = newLimit;
  this.counter = 0;

  var table = this;

  oldArray.each(function (list, i, storage) {
    if (list !== undefined) {
      var searchList = function (node) {
        var key = Object.keys(node.value)[0];
        table.insert(key, node.value[key]);

        if (node.next !== null) {
          searchList(node.next);
        }
      };
      searchList(list.head);
    }
  });
  this.resizing = false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



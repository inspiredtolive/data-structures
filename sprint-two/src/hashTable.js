

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var list = LinkedList();
  var obj = {};
  obj[k] = v; 
  list.addToTail(obj);
  if (this._storage.get(index)[k] !== undefined) {
    if (this._storage.get(index) === k) {
      this._storage.set(index, v);
    } else {
      var list = LinkedList();
      list.addToTail(v);
      this._storage.insert(index, list);
    }
  } else {
    this._storage.set(index, obj);
    this._storage.get(index)[k] = k;
  }
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

  } else if (retrieved.getValue(k) !== undefined) {
    this._storage.set(index, list);

  } else {
    retrieved.addToTail(obj);
    this._storage.set(index, retrieved);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieved = this._storage.get(index);
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
      removed = obj[k];
    }
  }
  this._storage.set(index, list);
  return removed;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



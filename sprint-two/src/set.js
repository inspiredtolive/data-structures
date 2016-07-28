var Set = function() {
  var set = Object.create(Set.prototype);
  set._storage = {};
  set.counter = 0;
  return set;
};

Set.prototype.add = function(item) {
  this.counter++;
  this._storage[this.counter] = item;
};

Set.prototype.contains = function(item) {
  return _.contains(this._storage, item);
};

Set.prototype.remove = function(item) {
  this._storage = _.reject(this._storage, function (value) {
    return value === item;
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var Set = function() {
  var set = Object.create(Set.prototype);
  set._storage = [];
  return set;
};

Set.prototype.add = function(item) {
  this._storage.push(item);
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

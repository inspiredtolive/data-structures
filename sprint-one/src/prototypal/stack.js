var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.len = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {
  size: function () {
    return this.len;
  },
  push: function (value) {
    this.storage[this.len] = value;
    this.len++;
  },
  pop: function () {
    var popped = this.storage[this.len - 1];
    delete this.storage[this.len - 1];
    this.len = this.len > 0 ? this.len - 1 : 0;
    return popped;
  }
};



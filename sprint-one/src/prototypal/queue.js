var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.len = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  size: function () {
    return this.len;
  },
  enqueue: function (value) {
    this.storage[this.len] = value;
    this.len++;
  },
  dequeue: function () {
    this.len = this.len > 0 ? this.len - 1 : 0;
    var deleted = this.storage[0];
    for (var key = 0; key < this.len + 1; key++) {
      var temp = this.storage[key];
      delete this.storage[key];
      this.storage[key - 1] = temp;
      console.log(key - 1);
      delete this.storage[-1];
    }
    return deleted;
  }
};



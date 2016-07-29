var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToHead = function (value) {
  var item = Node(value);
  if (this.head === null) {
    this.head = item;
    this.tail = item;
  } else {
    this.head.prev = item;
    item.next = this.head;
    this.head = item;
  }
};

DoublyLinkedList.prototype.removeTail = function () {};

var Node = function(value) {
  var obj = {};
  obj.value = value;
  obj.prev = null;
  obj.next = null;
  return obj;
};
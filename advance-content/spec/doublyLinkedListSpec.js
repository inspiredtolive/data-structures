describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToHead" and "removeTail."', function() {
    expect(doublyLinkedList).to.have.property('addToHead');
    expect(doublyLinkedList).to.have.property('removeTail');
  });

  it('should take a value and add it to the front of the list', function () {
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should have head and tail point to the same node if only contains 1 node', function () {
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(doublyLinkedList.tail.value);
  });

  it('should have nodes that have properties named "prev" and "next"', function () {
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head).to.have.property('prev');
    expect(doublyLinkedList.head).to.have.property('next');
  });

  it('should have nodes that have properties named "prev" and "next"', function () {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.head.next.value).to.equal(5);
    expect(doublyLinkedList.tail.prev.value).to.equal(6);
  });

  it('should take more than one value', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(99);
    expect(doublyLinkedList.head.value).to.equal(99);
    expect(doublyLinkedList.head.next.value).to.equal(5);
  });

  it('should remove the last node from the list and return its value', function() {
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.removeTail()).to.equal(5);
  });

  it('should remove added nodes and change tail', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(99);
    expect(doublyLinkedList.removeTail()).to.equal(5);
    expect(doublyLinkedList.removeTail()).to.equal(99);
  });

  it('should remove node and references to the former tail', function() {
    doublyLinkedList.addToHead(3);
    doublyLinkedList.addToHead(2);
    doublyLinkedList.addToHead(1);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(2);
    expect(doublyLinkedList.tail.prev.value).to.equal(1);
    expect(doublyLinkedList.tail.next).to.equal(null);
  });

  it('should return undefined if removeTail is called on empty list', function() {
    expect(doublyLinkedList.removeTail()).to.equal(undefined);
  });


  // add more tests here to test the functionality of doublyLinkedList
});

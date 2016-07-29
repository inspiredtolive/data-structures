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

  it('should take more than one value', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(99);
    expect(doublyLinkedList.head.value).to.equal(99);
    expect(doublyLinkedList.head.next.value).to.equal(5);
  });

  // add more tests here to test the functionality of doublyLinkedList
});

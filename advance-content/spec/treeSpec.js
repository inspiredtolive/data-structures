describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  // advance content

  it('should have property named "parent"', function() {
    expect(tree).to.have.property('parent');
  });

  it('should return null if it has no parent', function() {
    expect(tree.parent).to.equal(null);
  });

  it('should return a child\'s parent', function() {
    tree.addChild('mom');
    tree.children[0].addChild('kid');
    expect(tree.children[0].children[0].parent.value).to.equal(tree.children[0].value);
  });

  it('should have property names "removeFromParent"', function() {
    expect(tree).to.have.property('removeFromParent');
  });

  it('should disassociates the tree from its parent', function () {
    tree.addChild('baby');
    tree.children[0].removeFromParent();
    expect(tree.children.length).to.equal(0);
  });

  it('should have a method named "traverse"', function () {
    expect(tree).to.have.property('traverse');
  });

  it('should execute callback on every value', function () {
    var counter = 0;
    var callback = function() { counter++; };
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.traverse(callback);
    expect(counter).to.equal(4);
  });

  it('should execute callback with an argument', function () {
    var names = [];
    var getNames = function(name) { names.push(name); };
    tree.addChild('Bill');
    tree.addChild('Bob');
    tree.children[0].addChild('Marcus');
    tree.children[1].addChild('Allen');
    tree.traverse(getNames);
    expect(_.contains(names, 'Marcus')).to.equal(true);
  });  

});

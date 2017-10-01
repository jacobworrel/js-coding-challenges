describe('Reverse Doubly Linked List', () => {
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.reverse();

  it('should reverse the order of the values in the linked list', () => {
    expect(list.head.value).to.eql(3);
    expect(list.head.next.value).to.eql(2);
    expect(list.head.next.next.value).to.eql(1);
    expect(list.head.next.next.next).to.be(null);
  });

  it('should reassign the prev and next pointers', () => {
    expect(list.head.prev).to.be(null);
    expect(list.head.next.prev.value).to.eql(3);
    expect(list.head.next.next.prev.value).to.eql(2);
  });

  it('should reassign the head and the tail pointers', () => {
    expect(list.head.value).to.eql(3);
    expect(list.tail.value).to.eql(1);
  });
});

class Node {
 constructor(value) {
   this.value = value;
   this.next = null;
   this.prev = null;
 }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) this.head = this.tail = node;
    else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  remove(value) {
    if (!this.head) throw new Error('cannot remove value from empty linked list');
    else if (this.head.value === value) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }
    else if (this.tail.value === value) {
      const temp = this.tail;
      this.tail.prev.next = null;
      this.tail = temp.prev;
      return;
    }
    else {
      let current = this.head;
      while(current) {
        if (current.value === value) {
          current.next.prev = current.prev;
          current.prev.next = current.next;
          return;
        }
        current = current.next;
      }
    }
  }

  //Time Complexity: O(n)
  //Space Complexity: O(1)
  reverse() {
    let current = this.head;
    while (current) {
      let temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      if (!current.prev) {
        let temp = this.tail;
        this.tail = this.head;
        this.head = temp;
      }
      current = current.prev;
    }
  }
}

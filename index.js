class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Append node
  append(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Prepend node
  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Get size
  getSize() {
    console.log(this.size);
  }

  // Get head
  getHead() {
    console.log(this.head);
  }

  // Get tail
  getTail() {
    let current = this.head;
    let count = 0;
    while (count < this.size - 1) {
      current = current.next;
      count++;
    }
    console.log(current);
  }

  // Get at index
  at(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Insert at index
  insertAt(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = null;
  }
}

const l1 = new LinkedList();
l1.append(100);
l1.append(200);
l1.append(300);
l1.append(400);
l1.append(500);
l1.getSize();
l1.getHead();
l1.getTail();
l1.at(2);
// l1.insertAt(250, 2);
// l1.getAt(3);
// l1.removeAt(4);
// l1.printListData();
// l1.clearList();
// l1.printListData();

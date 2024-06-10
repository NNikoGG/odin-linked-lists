// Defining node structure
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Defining linked list structure
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
    console.log(`Size of LinkedList: ${this.size}`);
  }

  // Get head
  getHead() {
    console.log(this.head);
  }

  // Get tail
  getTail() {
    if (!this.head) {
      console.log("Empty list");
      return null;
    }
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
    if (!this.head) {
      console.log("List is empty");
      return null;
    }
    if (index < 0 || index >= this.size) {
      console.log("Index out of bounds");
      return null;
    }
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current);
        return;
      }
      count++;
      current = current.next;
    }
    console.log(null);
  }

  // Pop element
  pop() {
    if (this.size == 0) {
      console.log("Cannot pop from an empty list");
      return;
    } else if (this.size == 1) {
      this.head = null;
      this.size--;
      return;
    }
    let current = this.head;
    let count = 0;
    while (count < this.size - 2) {
      current = current.next;
      count++;
    }
    current.next = null;
    this.size--;
  }

  // Contains value
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        console.log(true);
      }
      current = current.next;
    }
    console.log(false);
  }

  // Return index of search value
  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  // LinkedList as string
  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      if (!current.next) {
        string += `(${current.data}) -> null`;
      } else {
        string += `(${current.data}) -> `;
      }
      current = current.next;
    }
    console.log(string);
  }

  // Insert at index
  insertAt(data, index) {
    // If index is out of range
    if (index < 0 || index >= this.size) {
      console.log("Index out of bounds");
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
    console.log(`New node has been inserted at index: ${index}`);
  }

  // Remove at index
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Index out of bounds");
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
    console.log(`Node has been removed from index: ${index}`);
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
l1.pop();
l1.contains(300);
l1.find(200);
l1.toString();
l1.insertAt(250, 2);
l1.removeAt(3);
l1.toString();

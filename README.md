# Javascript LinkedList

This project provides a complete implementation of a singly linked list in JavaScript. It covers basic operations such as appending and prepending nodes, accessing nodes by index, and more advanced operations like inserting and removing nodes at specific positions.

## Features

- Append nodes to the end of the list
- Prepend nodes to the beginning of the list
- Get the size of the list
- Access the head and tail of the list
- Access nodes at specific indices
- Remove nodes from the end and specific indices
- Check if the list contains a certain value
- Find the index of a specific value
- Convert the list to a string representation for easy viewing

## Getting Started

### Prerequisites

This project does not require any external libraries and can run in any JavaScript environment (Node.js, browsers).

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/NNikoGG/odin-linked-lists
cd odin-linked-lists
```

### Usage

To use the LinkedList class, include it in your JavaScript file. Here's a quick example:

```bash
const { LinkedList } = require('./odin-linked-lists');

const myList = new LinkedList();
myList.append(100);
myList.append(200);
myList.append(300);
console.log("Initial List:");
myList.toString();

// Add more operations as needed
myList.insertAt(250, 2);
console.log("After Inserting:");
myList.toString();

myList.removeAt(3);
console.log("After Removal:");
myList.toString();

```

### Running the Example

If you are using Node.js, you can run the script using:

```bash
node index.js

```

## Methods

- append(data): Adds a node with the specified data to the end of the list.
- prepend(data): Adds a node with the specified data to the beginning of the list.
- getSize(): Outputs the size of the list.
- getHead(): Outputs the head node of the list.
- getTail(): Outputs the tail node of the list.
- at(index): Outputs the node at the specified index.
- pop(): Removes the last node from the list.
- contains(value): Returns true if the list contains the specified value, false otherwise.
- find(value): Returns the index of the node containing the specified value, or null if not found.
- toString(): Outputs a string representation of the list.
- insertAt(data, index): Inserts a node with the specified data at the given index.
- removeAt(index): Removes the node at the specified index.

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  removeHead() {
    if (!this.head) return null;
    this.head = this.head.next;
    this.length--;
    return true; // Indicates successful removal
  }

  insertAtIndex(index, value) {
    if (index < 0 || index > this.length) return false; // Index out of bounds
    if (index === 0) return !!this.insertAtHead(value);

    const prev = this.getByIndex(index - 1);
    if (!prev) return false;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
    return true; // Indicates successful insertion
  }

  removeAtIndex(index) {
    if (index < 0 || index >= this.length) return false; // Index out of bounds
    if (index === 0) return !!this.removeHead();

    const prev = this.getByIndex(index - 1);
    if (!prev || !prev.next) return false;

    prev.next = prev.next.next;
    this.length--;
    return true; // Indicates successful removal
  }

  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output += `${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }

  toString() {
    let output = "";
    let current = this.head;
    while (current) {
      output += `${current.value} -> `;
      current = current.next;
    }
    return `${output}null`;
  }
}

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

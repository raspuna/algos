class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  addFront(val) {
    let new_node = new Node(val);
    if (!this.head) {
      this.head = new_node;
      return this;
    }
    new_node.next = this.head;
    this.head = new_node;
    return this;
  }
  removeFront() {
    let ret_node = this.head;
    this.head = ret_node.next;
    return ret_node;
  }
  front() {
    if (this.head) {
      return this.head.data;
    }
    return null;
  }
  show() {
    let next = this.head;
    let text = "";
    while (next != null) {
      text += next.data + ", ";
      next = next.next;
    }
    console.log(text);
  }
}

s = new LinkedList();
s.addFront(18);
console.log(s);
s.addFront(5);
s.addFront(73);
console.log(s);
console.log(s.removeFront());
s.removeFront();
console.log(s);

console.log(s.front());
console.log(s.removeFront());
console.log(s.front());

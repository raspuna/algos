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
  contains(value) {
    let runner = this.head;
    while (runner !== null) {
      if (value === runner.data) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }
  length() {
    let runner = this.head;
    let cnt = 0;
    while (runner !== null) {
      cnt++;
      runner = runner.next;
    }
    return cnt;
  }
  display() {
    let runner = this.head;
    if (runner === null) {
      console.log("");
      return;
    }
    let ret_text = "";
    while (runner.next !== null) {
      ret_text += runner.data + ", ";
      runner = runner.next;
    }
    ret_text += runner.data;
    console.log(ret_text);
  }
}

s = new LinkedList();
s.addFront(18);
console.log(s);
s.addFront(5);
s.addFront(73);
console.log("contains 20?", s.contains(20));
console.log("contains 18?", s.contains(18));
s.display();
console.log(s.removeFront());
s.display();
s.removeFront();
s.display();

console.log(s.front());
console.log(s.length());
console.log(s.removeFront());
console.log(s.front());
console.log(s.length());

//====
s2 = new LinkedList();
s2.addFront(76);
s2.addFront(2);
s2.display();
s2.addFront(11.41);
s2.display();

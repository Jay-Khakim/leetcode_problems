class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node(" how ")
// first.next.next.next = new Node(" are you ")

// console.log(first)

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	//Push method for adding a new node to the list
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	//Removing (Poping) the last node in the list
	pop() {
		if (!this.head) {
			return undefined;
		}
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push(99);
list.pop();
list.pop();
list.pop();

console.log(list);

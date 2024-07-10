class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.list = null;
		this.length = 0;
	}

	//adding a new node to the tail
	push(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
	}

	//gettting rid of one node from the tail
	pop() {
		if (!this.head) return undefined;
		let poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}

	//Removing from the beginning one node
	shift() {
		if (this.length === 0) return undefined;
		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}
}
let list = new DoublyLinkedList();
list.push("Hello");
list.push("99");
list.push("9999");
// list.pop()
// console.log(list.pop());
console.log(list.shift())
console.log(list);

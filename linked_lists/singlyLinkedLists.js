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

	// removing the node from the head
	shift() {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return currentHead;
	}

	//Adding new node to the head
	unshifting(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	//getting teh value of node with given index
	get(index) {
		if (index < 0 || index >= this.length) return null;
		let count = 0;
		let current = this.head;
		while (count !== index) {
			current = current.next;
			count++;
		}
		return current;
	}

	//taking one seppcific node and changing its value
	set(index, val) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	//iserting new value to specific index
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshifting(val);

		let newNode = new Node(val);
		let prev = this.get(index - 1);
		let temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}

	//removing the one node of specific index
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		let previousNode = this.get(index - 1);
		let removed = previousNode.next;
		previousNode.next = removed.next;
		this.length--;
		return removed;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node; 
			node = next;
		}
		return this
	}

	//Printing all nodes in one array
	print() {
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

let list = new SinglyLinkedList();
console.log(list);

console.log("----- Insertion ----------------");
console.log(list.insert(0, "Kahkimjonovs"));
console.log(list.insert(1, "Kahkimjonovs"));
console.log(list.insert(1, "Khakims"));
console.log(list.insert(2, "You are good"));
console.log(list.push("Cool"));
// console.log(list);
console.log(list.remove(0));
console.log(list.print());
console.log(list.reverse())
console.log(list.print());

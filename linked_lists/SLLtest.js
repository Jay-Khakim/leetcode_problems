class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor(val) {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;

		return this;
	}
	get(index) {
		if (index >= this.length || index < 0) {
			return null;
		}

		cur = this.head;
		var count = 0;
		for (var cur = this.head; cur !== null && count != index; cur = cur.next) {
			count++;
		}

		return cur;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) {
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
		if (index === this.length - 1) {
			let prevNode = this.get(index - 1);
			let currentNode = this.tail;
			this.tail = prevNode;
			this.length--;
			return currentNode;
		}

		let prevNode = this.get(index - 1);
		let currentNode = prevNode.next;
		prevNode.next = currentNode.next;
		this.length--;
		return currentNode;
	}

	rotate(index) {
		if (this.length === 0) return;
		if (index < this.length * -1 || index > this.length) return;

                // correcting index position if it is -1, so rotating from the last node, if it is -2 rotating from pre last node
		if (index > this.length * -1 && index < 0) {
			index = this.length - index * -1;
			console.log(index);
		}
		let count = 0;
		let lastNode = this.get(this.length - 1);
		let current = this.head;
		let prev = null;
		let partOfSLL = [];

		// Traverse the list until the node with the given value is found
		while (current !== null && count !== index) {
			partOfSLL.push(current);
			prev = current;
			current = current.next;
			count++;
		}
		// If the value is not found, return without making changes
		if (current === null) return;

		// If the value is already the head, no need to rotate
		if (prev === null) return;

		//// Set the new head to the node with the given value
		this.head = current;

		// The previous node becomes the new tail
		prev.next = null;
		this.tail = prev;

		// Attach the old head (all nodes in partOfSLL) to the end of the list
		lastNode.next = partOfSLL[0];
	}
}
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// singlyLinkedList.rotate(2);
singlyLinkedList.rotate(-2);

console.log(singlyLinkedList.head);

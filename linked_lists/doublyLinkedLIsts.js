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

	//Adding a new node to the head
	unshift(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	//Getting specific node
	get(index) {
		if (index < 0 || index >= this.length) return null;
		let count, current;
		if (index <= this.length / 2) {
			count = 0;
			current = this.head;
			while (count != index) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;
			while (count != index) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}

	// Updateing the specific node
	set(index, val) {
		let foundNode = this.get(index);
		if (foundNode != null) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	//Inserting a node the the specific place of the list
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return this.unshift(val);
		if (index === this.length) return this.push(val);

		let newNode = new Node(val);
		let beforeNode = this.get(index - 1);
		let afterNode = beforeNode.next;
		beforeNode.next = newNode;
		newNode.prev = beforeNode;
		newNode.next = afterNode;
		afterNode.prev = newNode;
		this.length++;
		return true;
	}

	//Removing the node from the list
	remove(index) {
		if (index < 0 || index >= this.length) return false;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		let removedNode = this.get(index);
		removedNode.prev.next = removedNode.next;
		removedNode.next.prev = removedNode.prev;
		removedNode.next = null;
		removedNode.prev = null;
		this.length--;
		return removedNode;
	}

	reverse() {
		let current = this.head;
		let temp = null;
		
		while (current !== null) {
		    // Swap next and prev for all nodes
		    temp = current.prev;
		    current.prev = current.next;
		    current.next = temp;
		    
		    // Move to the next node (which is now previous node)
		    current = current.prev;
		}
		
		// Before changing the head, check for the cases like empty list and list with only one node
		if (temp !== null) {
		    this.head = temp.prev;
		}
	    }
}
let list = new DoublyLinkedList();
list.push("Hello");
list.push("99");
list.push("9999");
list.push("19191");
// list.pop()
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift("This is first"));
// console.log(list.set(0, "HELLO"));
// console.log(list.insert(1, "Jake"));
console.log(list.remove(1))
console.log(list);

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(value, priority) {
		this.values.push({ value, priority });
		this.sort();
	}

	dequeue() {
		return this.values.shift();
	}

	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}


let q = new PriorityQueue();

q.enqueue("B", 3);
q.enqueue("C", 5);
q.enqueue("D", 2);
q.enqueue("Q", 12);
q.enqueue("P", 1);

console.log(q.values)


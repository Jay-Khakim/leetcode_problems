class Node{
        constructor(value, priority){
                this.value = value;
                this.priority = priority;
        }
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
                let newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			let parentIdx = Math.floor((index - 1) / 2);
			let parent = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[index] = parent;
			index = parentIdx;
		}
	}

	//Removing the root
	dequeue() {
		const min = this.values[0];
		const end = this.values.pop();
		this.values[0] = end;
		//Trickle down - Singking down
		this.sinkDown();
		return min;
	}

	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			// let rightChild = this.values[rightChildIdx];
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx;
				}
			}

			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

let ER = new PriorityQueue();
ER.enqueue("Common cold", 5)
ER.enqueue("Gunshot wound", 1)
ER.enqueue("High fewer", 4)
ER.enqueue("Broken arm", 2)
ER.enqueue("Glass in foot", 3)

console.log(ER)
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())



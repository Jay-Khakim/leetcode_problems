class Node{
        constructor(value, priority){
                this.value = value;
                this.priority = priority;
        }
}

class WeightedGraph {
	constructor() {
		this.adjacencyList = [];
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}

	Dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previos = {};
                let path = [] // to return at the end
                let smallest;

		//build up the initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
                        previos[vertex] = null;
		}

                //as long there is smth to visit
                while(nodes.values.length) {
                        smallest = nodes.dequeue().value;
                        if(smallest === finish){        
                                while(previos[smallest]){
                                        path.push(smallest)
                                        smallest = previos[smallest]
                                }
                                break;
                        }
                        if(smallest || distances[smallest] !== Infinity){
                                for( let neigbour in this.adjacencyList[smallest]){

                                        //find neigboring node 
                                        let nextNode = this.adjacencyList[smallest][neigbour];

                                        //calculate distance to nneigboring node
                                        let candidate = distances[smallest] + nextNode.weight;
                                        let nextNeigbour = nextNode.node
                                        if(candidate < distances[nextNeigbour]){

                                                //updating new smallest distance to neighbour
                                                distances[nextNeigbour] = candidate

                                                //updating previos - How we got to the neighbour
                                                previos[nextNeigbour] = smallest

                                                //enqueue in priority queue with new priority
                                                nodes.enqueue(nextNeigbour, candidate)

                                        }
                                }
                        }
                }
                // console.log(smallest)
                return path.concat(start).reverse()
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


let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));

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

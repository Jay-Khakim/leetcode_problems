class Graph {
	constructor() {
		this.adjancencyList = {};
	}

	addVertex(vertext) {
		if (!this.adjancencyList[vertext]) {
			this.adjancencyList[vertext] = [];
		}
	}

	addEdge(v1, v2) {
		this.adjancencyList[v1].push(v2);
		this.adjancencyList[v2].push(v1);
	}

	removeEdge(vertex1, vertex2) {
		this.adjancencyList[vertex1] = this.adjancencyList[vertex1].filter(
			v => v !== vertex2
		);
		this.adjancencyList[vertex2] = this.adjancencyList[vertex2].filter(
			v => v !== vertex1
		);
	}

	removeVertex(vertex) {
		while (this.adjancencyList[vertex].length) {
			const adjecentVertex = this.adjancencyList[vertex].pop();
			this.removeEdge(vertex, adjecentVertex);
		}
                delete this.adjancencyList[vertex];
	}
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Tashkent")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Tashkent", "Dallas");
g.addEdge("Tashkent", "Aspen");
g.addEdge("Tashkent", "Tokyo");
// g.addEdge("Dallas", "Aspan");
// g.removeEdge("Dallas", "Tokyo");
g.removeVertex("Tashkent")
console.log(g);

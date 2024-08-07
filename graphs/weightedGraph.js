class WeightedGraph{
        constructor(){
                this.adjacencyList = []
        }
        addVertex(vertex){
                if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        }

        addEdge(vertex1, vertex2, weight){
                this.adjacencyList[vertex1].push({node: vertex2, weight})
                this.adjacencyList[vertex2].push({node: vertex1, weight})
        }
}


let w = new WeightedGraph()

w.addVertex("A")
w.addVertex("B")
w.addVertex("C")

w.addEdge("A", "B", 9)
w.addEdge("A", "C", 5)
w.addEdge("B", "C", 7)

console.log(w.adjacencyList)
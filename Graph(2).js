class Graph{
    constructor(isDirected = false){
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Map();
    };

    addVertex(v){
        if(!this.adjList.has(v)){
            this.vertices.push(v)
            this.adjList.set(v,[])
        }
    };

    addEdges(v,w){
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    };

    getVertices(){
        return this.vertices
    };

    getAdjList(){
        return this.adjList
    };

    printGraph(){
        for(let [k ,v] of this.getAdjList){
            console.log(k+'-->'+v)
        }
    }
}

const graph  = new Graph();

const myVertices  = ['A', 'B','C','D','E','F','G','H','I'];

for(let i =0; i<myVertices.length ; i++){
    graph.addVertex(myVertices[i]);
}

graph.addEdges('A','B');
graph.addEdges('A','C')
graph.addEdges('A','D')
graph.addEdges('C','D')
graph.addEdges('C','G')
graph.addEdges('D','G')
graph.addEdges('D','H')
graph.addEdges('B','E')
graph.addEdges('B','F')
graph.addEdges('E','I')
graph.printGraph()
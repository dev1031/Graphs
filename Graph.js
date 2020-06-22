class Graph{
    constructor(){
        this.adjList = new Map()
    }

    addVertices(v){
        if(!this.adjList.has(v)){
            this.adjList.set(v,[])
        }else{
            return 'Vertix exists'
        }
    };

    addEdge(v, w){
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    };

    printGraph(){
       for(let [v, e ] of this.adjList){
           console.log( v +'-->' + e)
       }
    };

    visitedNode(){
        let dict = { }
        for(let edge of this.adjList){
            dict[edge] = false
        }
        return dict
    };

    breadthFirst(start){
        let visited = this.visitedNode();
        visited[start] = true;
        let q = [];
        q.push(start);
        while(q.length){
            let current = q.pop();
            console.log(current);
            let values = this.adjList.get(current)
            for(let elem of values ){
                if(!visited[elem]){
                    visited[elem] = true;
                    q.unshift(elem)
                }
            }
        }
    };

    deapthFirst(startingNode){
        let visited = this.visitedNode();
        this.dfsHelper(startingNode, visited);
      }
    
    dfsHelper(startingNode, visited){
        visited[startingNode] = true;
        console.log(startingNode);
    
        let arr = this.adjList.get(startingNode);
    
        for(let elem of arr){
            if(!visited[elem]){
                this.dfsHelper(elem, visited);
            }
        }
    }
}


let g = new Graph();
let arr = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < arr.length; i++) {
  g.addVertices(arr[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
g.printGraph();
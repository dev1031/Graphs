var graph = [[0,2,4,0,0,0],
             [0,0,1,4,2,0],
             [0,0,0,0,3,0],
             [0,0,0,0,0,2],
             [0,0,0,3,0,2],
             [0,0,0,0,0,0]
            ];

const floydWarshall = (graph)=>{
    const dist =[];
    for(let i =0; i< graph.length; i++){
        dist[i] = [];
        for(let j=0; j< graph.length ; j++){
            if(i===j){
                dist[i][j] = 0
            }else if(graph[i][j]===0){
                dist[i][j] = Infinity
            }else{
                dist[i][j] = graph[i][j]
            }
        }
    };
        for (var k = 0; k < graph.length; k += 1) {
          for (var i = 0; i < graph.length; i += 1) {
            for (var j = 0; j < graph.length; j += 1) {
              if (dist[i][j] > dist[i][k] + dist[k][j]) {
                dist[i][j] = dist[i][k] + dist[k][j];
              }
            }
          }
        }
       return dist 
}                      
console.log(floydWarshall(graph))
let arr = [1,0,3,6,8,2,4];
const bubbleSort = (arr)=>{
    for(let i =0 ; i < arr.length -1; i++){
        for(let j=i+1; j< arr.length ; j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}
console.log(bubbleSort(arr))
function mergeSort(arr){
    if(arr.length <=1){
        return arr
    }

    let midIndex   = Math.floor(arr.length/2);
    let left = arr.slice(0, midIndex)
    let right = arr.slice( midIndex)
    return merge(mergeSort(left) , mergeSort(right));
}

function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; 
      }
    }
  
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }

let arr = [1,0,3,6,8,2,4];

console.log(mergeSort(arr))
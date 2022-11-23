
function binarySearch(arr,t){
  let start=0
  let end=arr.length-1
  
  while(start<=end){
    let  middle= Math.floor((start+end)/2)
    if(arr[middle]===t){
      return middle
    }else if(arr[middle]<t){
        start=middle+1
    }else {
        end=middle-1
    }
  }
}

const a = [1,3, 4,5, 7, 9,65,90,156]
const target = 65

console.log("target found at position: ",binarySearch(a, target))



  
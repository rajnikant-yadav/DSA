
function binarySearch(arr,t){
  let start=0
  let end=arr.length-1
  
  while(start<=end){
    let  middle= Math.floor((start+end)/2)
    if(arr[middle]<t){
        start=middle+1
    }else if(arr[middle]>t){
        end=middle-1
    }
    else{
        return middle
    }
  }
}

const a = [1,3, 4,5, 7, 9,65]
const target = 5

console.log(binarySearch(a, target))



  
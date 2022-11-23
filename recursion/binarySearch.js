function binarySearch(arr,low,high,target){
    if(low===high){
        if(arr[low]===target){
            return low
        }
    }else{
        let mid=Math.floor((low+high)/2)
        if(arr[mid]===target){
            return mid
        } else if(arr[mid]>target){
          return  binarySearch(arr,low,mid-1,target)
        }else{
            return binarySearch(arr,mid+1,high,target)
        }

    }
}

const arr=[1,3,5,8,12,45,50]
const low=0
const high=arr.length
const target=12
console.log(binarySearch(arr,low,high-1,target))
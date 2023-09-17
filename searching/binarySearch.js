
// function binarySearch(arr,t){
//   let start=0
//   let end=arr.length-1
  
//   while(start<=end){
//     let  middle= Math.floor((start+end)/2)
//     if(arr[middle]===t){
//       return middle
//     }else if(arr[middle]<t){
//         start=middle+1
//     }else {
//         end=middle-1
//     }
//   }
// }

// const a = [1,3, 4,5, 7, 9,65,90,156]
// const target = 65

// console.log("target found at position: ",binarySearch(a, target))


// // Using for loop
// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   for (let i = 0; left <= right; i++) {
//     const mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//       return mid; // Element found, return its index
//     } else if (arr[mid] < target) {
//       left = mid + 1; // Adjust the left boundary
//     } else {
//       right = mid - 1; // Adjust the right boundary
//     }
//   }

//   return -1; // Element not found
// }

// // Example usage:
// const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80];
// const targetValue = 30;
// const result = binarySearch(sortedArray, targetValue);

// if (result !== -1) {
//   console.log(`Element ${targetValue} found at index ${result}.`);
// } else {
//   console.log(`Element ${targetValue} not found in the array.`);
// }


//  Using Recurssion

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Element not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Element found, return its index
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right); // Search the right half
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1); // Search the left half
  }
}


 const arr = [10, 20, 30, 40, 50, 60, 70, 80];
 const target = 30;

 console.log(binarySearchRecursive(arr,target))
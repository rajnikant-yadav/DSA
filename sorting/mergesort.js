// Merge Sort Algorithm Explained:

// 1  Divide: Imagine you have a list of unsorted numbers. The first step is to divide the list into smaller parts.

// 2  Keep dividing until you have small lists with 0 or 1 number in them. Think of it as breaking down a big problem into smaller, more manageable pieces. These small lists are like tiny puzzles.

// 3  Sort: Now, let's work on solving those tiny puzzles. If you have a list with only one number, it's already sorted because there's nothing to compare it to. If you have a list with two numbers, you can easily figure out which one is smaller and put them in order.

// 4  Merge: Once you've sorted the small lists, it's time to put them back together. But you're not just throwing them together randomly; you're merging them in a clever way.

// 5  Compare: Take the first two small lists you created. Look at the first number in each of them. Compare them to see which one is smaller.

// 6  Put the smaller number in a new list. Imagine creating a new list and putting that smaller number in it. This new list is now sorted because you've picked the smallest number from the original two lists.

// 7  Repeat: Keep comparing and picking the smaller number from the original lists, putting them in the new sorted list.

// 8  Do this for all the small lists: Continue this process for all the tiny puzzles you created earlier.

// 9 Combine: When you're done with all the small lists, you'll have one big sorted list! You've successfully combined the sorted pieces.

// 10  Congratulations, your list is now fully sorted! You've taken a big, unsorted problem, broken it down, sorted the pieces, and put them back together to create a sorted list.

// Think of it like sorting a deck of playing cards. You first divide the deck into smaller stacks, then sort each stack separately, and finally merge them back together to get a fully sorted deck.

// Merge sort is a bit like solving a jigsaw puzzle: you break it into smaller parts, solve each part, and then assemble the solved parts to complete the puzzle. It's efficient and reliable for sorting large amounts of data

// Merge sort has a time complexity of O(n log n), which makes it efficient for sorting large datasets. It is a stable sorting algorithm and is widely used in practice.

// first approach

function merge(leftArr,rightArr){
    const mergeArr=new Array(leftArr.length+rightArr.length)
    let i=0,j=0,k=0;
    while(i<leftArr.length && j<rightArr.length){
      if(leftArr[i]<rightArr[j]){
        mergeArr[k++]=leftArr[i++]
      }else{
        mergeArr[k++]=rightArr[j++]
      }
    }
    for(;i<leftArr.length;i++){
      mergeArr[k++]=leftArr[i]
    }
    for(;j<rightArr.length;j++){
      mergeArr[k++]=rightArr[j]
    }
    return mergeArr
  }
  
  
  function mergeSort(arr){
    const n=arr.length
    if(n<2){
      return arr
    }
   const middle =Math.floor(n/2)
   const left=new Array(middle)
   const right=new Array(n-middle)
       for (let i = 0; i < n; i++) {
        if (i < middle) {
          left[i] = arr[i]
        } else {
          right[i - middle] = arr[i]
        }
      }
    
      return merge(mergeSort(left), mergeSort(right))
  
  }
  
  const arr=[6, 5, 12, 10, 9, 1]
  console.log(mergeSort(arr))
  
  
  
  
  // second approach
  

  // function merge(arr, l, m, r)
  // {   var n1 = m - l + 1;
  //     var n2 = r - m;
  //     var L = new Array(n1);
  //     var R = new Array(n2);
   
  //     // Copy data to temp arrays L[] and R[]
  //     for (var i = 0; i < n1; i++)
  //         L[i] = arr[l + i];
  //     for (var j = 0; j < n2; j++)
  //         R[j] = arr[m + 1 + j];
  // var i = 0; var j = 0; var k = l;
   
  // while (i < n1 && j < n2) {
  //         if (L[i] <= R[j]) {
  //             arr[k++] = L[i++];
  //         }
  //         else {
  //             arr[k++] = R[j++];
  //         }
        
  //  }
  
  // for(;i<n1;i++){
  //       arr[k++] = L[i]
  //     }
   
  // for(;j<n2;j++){
  //       arr[k++] =R[j]
  //     }
  //   }
   
  
  // function mergeSort(arr,l, r){
  //     if(l<r){
  //     var m =Math.floor((l+r)/2);
  //     mergeSort(arr,l,m);
  //     mergeSort(arr,m+1,r);
  //     merge(arr,l,m,r);
  // }
  // }
   
  // var arr =[6, 5, 12, 10, 9, 1];
  // var arr_size = arr.length;
  // mergeSort(arr, 0, arr_size - 1);
  // console.log(arr);


// third approach
  // function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr; // Base case: an array with 0 or 1 elements is already sorted
//   }

//   // Split the array into two halves
//   const middle = Math.floor(arr.length / 2);
//   const leftHalf = arr.slice(0, middle);
//   const rightHalf = arr.slice(middle);

//   // Recursively sort both halves
//   const sortedLeftHalf = mergeSort(leftHalf);
//   const sortedRightHalf = mergeSort(rightHalf);

//   // Merge the sorted halves back together
//   return merge(sortedLeftHalf, sortedRightHalf);
// }

// function merge(left, right) {
//   let result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   // Compare elements from both arrays and merge them in sorted order
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   // Concatenate any remaining elements from both arrays
//   return result.concat(left.slice(leftIndex), right.slice(rightIndex));
// }

// // Example usage:
// const unsortedArray = [64, 25, 12, 22, 11];
// const sortedArray = mergeSort(unsortedArray);
// console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
// Bubble Sort Algorithm Explained:

// 1   Start at the beginning of a list of numbers. This list is unsorted at the beginning.

// 2   Compare the first two numbers in the list. Check if the first number is greater than the second number.

// 3  If the first number is greater than the second number, swap them. Imagine two bubbles floating in water; the bigger one rises to the top. So, in our list, the bigger number "bubbles up."

// 4    Move to the next pair of numbers (the second and third numbers) and repeat the comparison and swap if necessary. Keep doing this for the entire list, one pair at a time.

// 5    Continue this process for the entire list, one pass at a time. After the first pass, the largest number will have "bubbled up" to the end of the list.

// 6    Repeat the whole process (comparing and swapping) for the remaining unsorted part of the list. However, now you don't need to compare the last number since it's already in its correct position from the previous pass.

// 7    Keep repeating these passes until there are no more swaps needed in a pass. This means the list is fully sorted.

// 8   Congratulations, your list is now sorted! The smaller numbers have "bubbled up" to the beginning of the list, and the largest number is at the end.

// Here's a visual analogy: Imagine you have a row of people, and you want to arrange them by height, with the tallest person at the end of the line. You start by comparing the heights of the first two people, and if the taller one is in front, you ask them to switch positions. Then, you move on to the next pair until the tallest person has "bubbled up" to the end of the line. You repeat this process until no more swaps are needed, and your line is sorted by height.

// Bubble sort is a straightforward way to sort a list, but it can be slow for large lists because it requires many comparisons and swaps. However, it's a great way to understand the basic principles of sorting algorithms.


// Bubble sort
function bubbleSort(array) {
    const n = array.length
  
    for (let i = 0; i < n - 1; i++) {
      //let swapped = false
  
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp
  
         // swapped = true
        }
      }
  
    //  if (!swapped) break
    }
  
    return array
  }
  
  console.log(bubbleSort([6, 3, 5, 8, 0]))
  



//   In this code:

// bubbleSort is a function that takes an array arr as its input.

// The outer loop (for i) iterates through the array from the first element to the second-to-last element (n - 1). This is because, after each pass, the largest element is guaranteed to have "bubbled up" to the end of the array.

// The inner loop (for j) compares adjacent elements. If arr[j] is greater than arr[j + 1], it swaps them to ensure that the larger element "bubbles up" toward the end of the array.

// After each pass of the inner loop, the largest unsorted element is moved to the end of the array.

// The process continues for n - 1 passes, where n is the number of elements in the array. After these passes, the array is sorted.

// The function returns the sorted array.

// Bubble sort has a time complexity of O(n^2) in the worst case, making it less efficient than other sorting algorithms like quicksort or mergesort for larger datasets. It's mainly used for educational purposes or for small datasets where simplicity is more important than efficiency.
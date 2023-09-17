// Insertion Sort Algorithm Explained:

// 1    Start with the second item in the list. Imagine you have a list of numbers on a piece of paper.

// 2    Pick up the second number (let's call it "current") and compare it to the first number. Look at the second number and see if it's smaller or larger than the first number.

// 3    If the second number is smaller than the first one, swap them. If the second number is smaller, put it in front of the first number. You've just sorted the first two numbers!

// 4    Now, you have the first two numbers sorted. Imagine these two numbers are in the right place.

// 5    Move on to the third number and compare it to the first two numbers. Take the third number and see where it fits among the first two.

// 6    Keep moving to the left and comparing until you find the correct spot for the third number. Imagine you're looking for the right spot as if you were finding the right spot for a new book on a bookshelf.

// 7    Insert the third number into its correct spot among the first two numbers. This might mean shifting the first two numbers to make room for the third one.

// 8    Repeat this process for each remaining number in the list, one by one. Pick up the next number, find its spot among the sorted numbers, and insert it there.

// 9    Congratulations, your list is now fully sorted! When you've gone through all the numbers in the list, you'll have sorted them all, just like organizing a deck of cards.

// Think of it like sorting a deck of playing cards by picking up each card one by one, comparing it to the cards already sorted in your hand, and inserting it in the correct position within your sorted hand.

// Insertion sort builds the sorted part of the list one element at a time, inserting each element into its proper place among the sorted elements, until the whole list is sorted. It's simple to understand and is often used for small lists or as a building block in more complex sorting algorithms.


// Insertion sort is efficient for small datasets or nearly sorted datasets. It has a time complexity of O(n^2) in the worst case, making it less efficient than some other sorting algorithms for larger datasets. However, it is simple to implement and is often used for educational purposes or for sorting small arrays.
// Using while loop
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const currentElement = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than currentElement
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place currentElement in its correct position
    arr[j + 1] = currentElement;
  }

  return arr;
}

// Example usage:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]

  
  // Using for loop


  // function insertionSort(arr) {
  //   const n = arr.length;
  
  //   for (let i = 1; i < n; i++) {
  //     const key = arr[i]; // Current element to be inserted at the right position
  
  //     // Move elements of arr[0..i-1] that are greater than key
  //     // to one position ahead of their current position
  //     let j;
  //     for (j = i - 1; j >= 0 && arr[j] > key; j--) {
  //       arr[j + 1] = arr[j];
  //     }
  
  //     // Place the key at its correct position
  //     arr[j + 1] = key;
  //   }
  // }
  
  // // Example usage:
  // const arrayToSort = [12, 11, 13, 5, 6];
  // insertionSort(arrayToSort);
  // console.log(arrayToSort); // Output: [5, 6, 11, 12, 13]
  
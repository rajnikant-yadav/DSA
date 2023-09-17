// Selection Sort Algorithm Explained:

// 1    Start at the beginning of the list of numbers. Imagine you have a list of numbers written on a piece of paper.

// 2    Find the smallest number in the entire list. Look at all the numbers on the paper and pick the smallest one. This is the first number you want to put in the sorted part of your list.

// 3   Swap the smallest number with the first number in the list. If the smallest number you found in step 2 is not already the first number, swap it with the first number. Now, you have one number in the sorted part of your list.

// 4    Move one step to the right in your list. Imagine you're moving your finger or a pointer one step to the right on the paper.

// 5    Repeat steps 2 to 4 for the remaining unsorted part of your list. So, for the unsorted part to the right of your finger or pointer, find the smallest number, swap it with the number just to the right of your pointer, and then move your pointer one step to the right.

// 6    Keep repeating these steps until your pointer reaches the end of the list. As you keep moving your pointer to the right and sorting one number at a time, the smallest numbers will keep "bubbling up" to the left, and the sorted part of your list will grow.

// 7    Congratulations, your list is now sorted! When your pointer reaches the end of the list, it means you've sorted all the numbers, and your list is now in order from smallest to largest.

// Think of it like arranging a line of students in height order. You start by finding the shortest student, make them stand at the front of the line, and continue doing this until all the students are in the right order. This is similar to how selection sort works—it repeatedly selects the smallest number and puts it in its correct place.

// Selection sort has a time complexity of O(n^2) and is not as efficient as some other sorting algorithms for large datasets. However, it is simple to implement and works well for small lists or as a learning exercise for understanding sorting algorithms.




function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the current index has the minimum value
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the element at the current index
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

// Example usage:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]


// Here's how the selection sort algorithm works:

// The selectionSort function takes an array arr as input.

// It iterates through the array using an outer loop (for i), which goes from the first element to the second-to-last element.

// Inside the outer loop, it assumes that the current index (i) contains the minimum value.

// It then searches for the index of the minimum element in the unsorted part of the array (from i + 1 to the end) using an inner loop (for j).

// If a smaller element is found, it updates minIndex to the index of that smaller element.

// After finding the minimum element in the unsorted part of the array, it swaps the minimum element with the element at the current index (i) to place it in its correct sorted position.

// The process continues, and after each iteration of the outer loop, one more element is added to the sorted part of the array.

// The algorithm repeats until the entire array is sorted.

// The term "selection" in "selection sort" refers to the process of selecting the smallest (or largest, depending on the sorting order) element from the unsorted portion of the array and placing it in its correct position within the sorted portion. In other words, the algorithm selects the appropriate element to add to the sorted part of the list during each iteration.
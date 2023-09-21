// Quick Sort Algorithm Explained:

// 1    Choose a Pivot: Imagine you have a deck of cards and you want to sort them. The first thing you do is pick one card from the deck and call it the "pivot." This card will help us divide and conquer.

// 2    Divide the Cards: Now, look at all the other cards and compare each of them to the pivot card.

// 3    If a card is smaller than the pivot, put it in a pile on your left.
//     If a card is larger than the pivot, put it in a pile on your right.
//     If a card is equal to the pivot, put it in a separate pile right next to the pivot.
//     Sort the Piles: You now have three piles of cards: smaller, equal, and larger. But these piles are not sorted yet. You need to sort the smaller and larger piles using the same process.

// 4    Pick a pivot for each of these two piles (smaller and larger).
//     Divide the cards in each pile into smaller, equal, and larger, just like you did in the first step.
//     Repeat: Keep repeating this process of choosing a pivot, dividing the cards, and sorting the piles until all the cards are in their correct order. Each time you do this, you're making the piles smaller and smaller.

// 5    Combine: Once you've sorted all the piles and made them smaller and smaller, you can start putting them back together.

// 6    First, put the smaller pile together.
//     Then, put the equal pile next to it.
//     Finally, put the larger pile next to the equal pile.
//     Congratulations, your deck of cards is now fully sorted! You've taken a big jumble of cards, used the pivot to divide and conquer, and sorted them all.

// Quick sort is like sorting a big problem into smaller problems, solving each small problem, and then combining the solutions to get the final sorted result. It's a very efficient way to sort things, and it's used in many computer programs to sort data quickly.
// Quick sort has an average time complexity of O(n log n), making it efficient for sorting large datasets. It's a widely used sorting algorithm due to its speed and versatility.

// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr; // Base case: an array with 0 or 1 elements is already sorted
//     }

//     const pivot = arr[0]; // Choose the first element as the pivot
//     const left = [];
//     const right = [];

//     // Partition the array into two subarrays
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }

//     // Recursively sort the subarrays and combine them
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }

//   const unsortedArray = [4, 2, 9, 6, 5, 3];
//   const sortedArray = quickSort(unsortedArray);
//   console.log(sortedArray); // Output: [2, 3, 4, 5, 6, 9]


// Second approach
function partition (arr, low, high) {
  let i = low,
    j = high,
    temp
  const pivot = arr[low]

  while (i < j) {
    while (arr[i] <= pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    if (i < j) {
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
  if (i < j) {
    temp = arr[low]
    arr[low] = arr[j]
    arr[j] = temp
  }
  return j
}

function quickSort (arr, low, high) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high)

    quickSort(arr, low, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, high)
  }
}

const arr = [2, 5, 1, 6, 8, 4]
quickSort(arr, 0, arr.length - 1)
console.log(arr)

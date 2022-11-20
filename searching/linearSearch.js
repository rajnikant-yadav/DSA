// function linearsearch(arr,element){
//     for (let i=0;i<arr.length;i++){
//         if(arr[i]===element){return `Search found at position ${i}`}
//         }
//         return 'elenent not found'
// }

// console.log(linearsearch([1,25,8,9,7],89))


function linearSearch(arr, target) {
    for (let i in arr) {
      if (arr[i] === target) {return `Search found at position ${i}`}
    }
    return -1
  }
  console.log(linearSearch([1, 2, 3, 4,'a'], 'a'))

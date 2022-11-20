function insertionSort(array) {
    const n = array.length
  
    for (let i = 1; i < n; i++) {
      const temp = array[i]
      let j = i - 1
  
      while( j >= 0 && array[j] >= temp) {
        array[j + 1] = array[j]
        j--
      }
  
      array[j + 1] = temp
    }
  
    return array
  }
  
  console.log(insertionSort([6, 3, 5, 8, 0]))
  
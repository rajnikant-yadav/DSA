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
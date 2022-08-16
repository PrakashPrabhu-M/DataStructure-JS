// a=[5,4,2,1]

const insertionSort = (arr) => {
    // consider th first element is sorted
    // compare the first element with sorted+1th element
    // place the sorted +1th element accordingly
    // loop till last -1

    for(let i=1;i<arr.length;i++){
        currentVal=arr[i];
        for(var j=i-1;j>=0 && arr[j]>currentVal;j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=currentVal;
    }
    return arr;
  };
  
  const res = insertionSort([5, 4, 3, 2, 1]);
  console.log(res);
  
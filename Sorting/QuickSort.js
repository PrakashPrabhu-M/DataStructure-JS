const quickSort = (arr) => {
  const swap = (arr, i, j) => {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
  };

  const pivot = (arr, start, end) => {
    const pivot_elem = arr[start];
    let shiftIdx = start;
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivot_elem) {
        shiftIdx++;
        i !== shiftIdx && swap(arr, i, shiftIdx);
      }
    }

    start!==shiftIdx && swap(arr, start, shiftIdx);
    return shiftIdx;
  };

  const sort = (arr,start=0,end=arr.length-1) => {
    if(start>=end) return arr;
    const pivotIdx = pivot(arr, start, end);
    sort(arr,start,pivotIdx-1);
    sort(arr,pivotIdx+1);
  };
  sort(arr)
  return arr;
};

const res = quickSort([5, 4, 3, 2, 1,8,6,4,2]);
console.log(res);

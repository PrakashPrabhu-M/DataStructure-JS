// a=[5,4,2,1]

const selectionSort = (arr) => {
  // iterate through the array to find the minimum element
  // place that first and loop till all are done

  const swap = (arr, i, j) => {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
  };

  for (let i = 0; i < arr.length; i++) {
    let min=i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    i!==min && swap(arr,min,i);
  }
  return arr;
};

const res = selectionSort([5, 4, 3, 2, 1]);
console.log(res);

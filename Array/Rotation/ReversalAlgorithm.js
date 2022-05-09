// https://www.geeksforgeeks.org/program-for-array-rotation-continued-reversal-algorithm/?ref=lbp
// v2
const arr = [1, 2, 3, 4, 5];
const steps = 2;
const n = arr.length;

const rotateArr = (arr, d, n) => {
  // pre-procress the d i.e., d% length of the array
  d = d % n;
  // if d is 0 return the array
  if (!d) return arr;

  // reverse funtion
  // take the array, starting poing and ending point
  function reverse(arr, from, to) {
    // run a loop through array from starting point to half-way to the end point
    for (let i = from; i < Math.floor((from+to) / 2); i++) {
      // swap the value of starting point with that of the ending point using the looping variable i and to+from-i
      const temp=arr[i];
      arr[i]=arr[to+from-i];
      arr[to+from-i]=temp;
    }
  }
console.log('original array', arr);
  // reverse the part of array i.e., from starting to d elements -> [2, 1, 3, 4, 5]
  reverse(arr,0,d-1);
  console.log('first part', arr);
  // reverse the other part of the array i.e., from d+1 elements to end -> [2, 1, 5, 4, 3]
  reverse(arr,d,arr.length-1);
  console.log('second part', arr);
  // reverse the complete array -> [3, 4, 5, 1, 2]
  reverse(arr,0,arr.length-1);
  console.log('complete', arr);
  // return the array
  return arr;
};

const res=rotateArr(arr,steps,n);
console.log(res);
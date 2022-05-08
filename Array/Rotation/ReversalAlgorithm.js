// https://www.geeksforgeeks.org/program-for-array-rotation-continued-reversal-algorithm/?ref=lbp
// v1
const arr = [1, 2, 3, 4, 5];
const steps = 2;
const n = arr.length;

const rotateArr = (arr, d, n) => {
  d = d % n;
  // split the array into two parts A (till d) and the remening as B
  // reverse the elements of A
  console.log(`Initial: ${arr}`);
  reverse(arr,0,d-1);
  console.log(`A: ${arr}`);

  // reverse the elements of B
  reverse(arr,d,n-1);
  console.log(`B: ${arr}`);
  
  // reverse AB
  reverse(arr,0,n-1);

  return arr;

  // 1 2 3 4 5
  // 2 1 3 4 5
  // 2 1 5 4 3
  // 3 4 5 2 1

  // reverse(from, to)
  function reverse(arr,from, to) {
    // loop through half of the elements passed (i.e., loop (from+to)/2 times)
    for (let i = from; i < (from + to) / 2; i++) {
      // initialize the looping variable from "from"
      // temp will store the loop variables data
      const temp=arr[i];
      // then the loop variable is assigned to to-i+from
      arr[i]=arr[to-i+from];
      // array of to-i+from is assigned to temp
      arr[to-i+from]=temp;
    }
  }
};

console.log(rotateArr(arr, steps, n));

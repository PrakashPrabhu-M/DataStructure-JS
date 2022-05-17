// https://www.geeksforgeeks.org/array-rotation/?ref=lbp
// v2
const arr = [1, 2, 3, 4, 5];
const steps = 2;
const n = arr.length;

console.log(rotateArr(arr, steps, n));

function rotateArr(arr, d, n) {
    d=d%n;
  // create a temp array and store values from 0 to d
  const temp = arr.slice(0, d);

  // rearrange the actual array such that last d values are left free
  for (let i = 0; i < n - d; i++) arr[i] = arr[i + d];

  // make the last d values as the temp array
  for (let i = n - d; i < n; i++) arr[i] = temp[i + d - n];

  return arr;
}


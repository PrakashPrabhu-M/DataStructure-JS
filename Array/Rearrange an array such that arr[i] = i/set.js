// https://www.geeksforgeeks.org/rearrange-array-arri/?ref=lbp
// v1
// Input : arr = {-1, -1, 6, 1, 9, 3, 2, -1, 4, -1}
// Output : [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]

const arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];

const reorder = (arr) => {
  // initialize a set
  const s = new Set();

  // loop through the array and store all the elements in the set
  for (let elem of arr) s.add(elem);
  console.log(s);
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // if the index exists in the set, make that index value in array as the index
    if (s.has(i)) arr[i] = i;
    // else make it -1
    else arr[i] = -1;
  }
  // return array
  return arr;
};

console.log(reorder(arr));

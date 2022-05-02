// https://www.geeksforgeeks.org/rearrange-array-arri/?ref=lbp

// Input : arr = {-1, -1, 6, 1, 9, 3, 2, -1, 4, -1}
// Output : [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]

const arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];

const reorder = (arr) => {
  const s = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if(s.has(i))
      arr[i]=i;
    else
      arr[i]=-1;
  }
  return arr;
};

console.log(reorder(arr));

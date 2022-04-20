// const arr = [1, 2, 3, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7];
const arr = [1,1,1,1,1,1,1,1,1, 2, 3, 4, 5, 6, 7];

const uniqueCount = (arr) => {
  // initialize two pointers i.e., one at initial position (left pointer) and other at 2nd initial position (right pointer)
  let left = 0,
    right = 1;

  while (right < arr.length) {
    // compare whether they both are unique, if unique increment both the right pointer and left pointer by one after making left+1=right
    if (arr[left] !== arr[right]) {
      arr[left + 1] = arr[right];
      right++;
      left++;
    }

    // if they're not unique increment only the right pointer till the values at both are unique
    else {
      right++;
    }
  }
  // once the right pointer reaches the end of the array, return the index of left pointer +1
  return left + 1;
};

const res = uniqueCount(arr);
console.log(res);

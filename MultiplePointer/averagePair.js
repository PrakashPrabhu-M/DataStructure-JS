function averagePair(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  //   Take two pointers, one from begining and other from end
  let left = 0,
    right = arr.length - 1;

  // multiply the target average by 2 so that instead of average, sum can be used
  const target = num * 2;

  // loop through the array such that left pointer is lesser than right
  for (let i = 0; i < 10; i++) {
    let sum = arr[left] + arr[right];
    console.log(left, right);
    // in each iteration, if target value is higher than the sum of left and right, decrement the right pointer
    target > sum && left++;
    // if it is low increment the left pointer
    target < sum && right--;
    // if they're equal return true
    if (target == sum) return true;
  }
  // if left is greater than right return false
  return false;
}
let res=averagePair([1,3,3,5,6,7,10,12,19],8);
console.log(res);
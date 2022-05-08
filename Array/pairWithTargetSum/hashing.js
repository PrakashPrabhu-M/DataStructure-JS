// https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/
// v2
// Input: arr[] = {0, -1, 2, -3, 1}
//         x= -2
// Output: Pair with a given sum -2 is (-3, 1)
//               Valid pair exists
// Explaination:  If we calculate the sum of the output,1 + (-3) = -2

// Input: arr[] = {1, -2, 1, 0, 5}
//        x = 0
// Output: No valid pair exists for 0

const arr = [0, -1, 2, -2, 1],
  target = 2;

function isPair(arr, target) {
  // lower+upper=target
  // lower=target-upper
  // lower is the first pointer and it stores all the elements in set on each iteration, if first instance is miissed then upper will be caught
  // initialize a set with all of the array elements 
  
  // (modified)
  const s = new Set();

  // initialize a pointer starting from first element
  for (let elem of arr) {
    // loop till the end of the array
    // for each element in the array, check if the target - the element is contained in the array, if yes, return true
    if(s.has(target-elem)) return true;
    s.add(elem);
  }
  // return false after the loop
  return false;
}

const res = isPair(arr, target);
console.log(res);

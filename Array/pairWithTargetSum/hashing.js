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
  // we are looking for x+y=target
  // so x=target-y, we can look whether target-y exists in the below set where y is looping variable and x are the variables in the set
  // initialize a set
  const s = new Set();
  // loop through the array
  for (let i of arr) {
    // check if the target - the loop element exists in the set
    // if exists, return true
    if(s.has(target-i)) return true;
    // else add the looping variable to the set
    s.add(i);
  }
  return false;
}

const res = isPair(arr, target);
console.log(res);

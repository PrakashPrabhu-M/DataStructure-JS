// https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/

// Input: arr[] = {0, -1, 2, -3, 1}
//         x= -2
// Output: Pair with a given sum -2 is (-3, 1)
//               Valid pair exists
// Explaination:  If we calculate the sum of the output,1 + (-3) = -2

// Input: arr[] = {1, -2, 1, 0, 5}
//        x = 0
// Output: No valid pair exists for 0

const arr = [0, -1, 2, -2, 1],
  target = -2;

function isPair(arr, target) {
  // initialize an object
  const obj = new Set();
  // loop through the array
  for (let elem of arr) {
    // target - arr[i] = z
    // target=z + arr[i]
    // so if target - element of the array is contained in the object, return true
    if(obj.has(target-elem)) return true;

    // else add the element to the object
    else obj.add(elem)
  }
  return false;
}

const res=isPair(arr,target);
console.log(res);
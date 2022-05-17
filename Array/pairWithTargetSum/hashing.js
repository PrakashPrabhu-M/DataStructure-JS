// https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/
// v3
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



/**
 * isPair
 * @param {Array<number>} arr input array
 * @param {number} target target sum
 * @returns {boolean} true is exists, false is not
 */
function isPair(arr, target) {
  // initialize all elements of the array to a set
  const set=new Set(arr);

  // we are looking for x+y=target
  // it can also be represented as x=target-y
  // here x is contained in set and y is looping variable, so if the difference of target with looping varible is contained in set, then there exists a pair
  for(let i of arr){
    // return true is exists
    if(set.has(target-i)) return `${target-i}+${i}=${target}`;
  }
  // return false after looping
  return false;
}

const OnComplexity=(arr,target)=>{
  const set=new Set();
  for(let i of arr){
    if(set.has(target-i)) return `${target-i}+${i}=${target}`;
    set.add(i);
  }
  return false;
}

const res = OnComplexity(arr, target);
console.log(res);
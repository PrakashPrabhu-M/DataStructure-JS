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
  target = 5;

function isPair(){
  // initialze an object
  let obj=new Set();

  // loop throught the array
  for(let element of arr){
    // on each iteration,
  // we know x+y=z (z is target, x and y are the elements we're searching)
  // so x-z=-y or z-x=y so subtract the element(x) from the array with the target(z) and check if the result(y) is present in the object
  // if y is present, it meanse that x and y are present so return true
  if(obj.has(target-element)) return `${element} + ${target-element} = ${target}`;
  obj.add(element);
  }
  
  // after looping return false, as y is not present
  return false;
}

const res=isPair(arr,target);
console.log(res);
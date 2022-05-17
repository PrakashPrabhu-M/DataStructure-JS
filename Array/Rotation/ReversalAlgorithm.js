// https://www.geeksforgeeks.org/program-for-array-rotation-continued-reversal-algorithm/?ref=lbp
// v4
const arr = [1, 2, 3, 4, 5];
const steps = 2;
const n = arr.length;

/**
 * 
 * @param {Array<number>} arr Array to be reversed
 * @param {number} from starting position of rotation
 * @param {number} to ending position of rotation
 */
const reverse=(arr,from,to)=>{
  for(let i=from;i<(from+to)/2;i++){
    const temp=arr[i];
    arr[i]=arr[from+to-i];
    arr[from+to-i]=temp;
  }
}

/**
 * rotateArr
 * @param {Array<number>} arr array to be rotated
 * @param {number} d number of steps
 * @param {number} n length of the array
 */
const rotateArr=(arr,d,n)=>{
  // reverse the array from 0 to d
  reverse(arr,0,d-1);
  
  // reverse the array from d to n
  reverse(arr,d,n-1);
  
  // reverse the entire array
  reverse(arr,0,n-1);

  return arr;
}

const res=rotateArr(arr,steps,n);
console.log(res);
// https://www.geeksforgeeks.org/program-for-array-rotation-continued-reversal-algorithm/?ref=lbp
// v3
const arr = [1, 2, 3, 4, 5];
const steps = 2;
const n = arr.length;

/**
 * rotateArray
 * @param {Array<number>} arr array of elements
 * @param {number} d steps
 * @param {number} n length of the array
 */
const rotateArr = (arr, d, n) => {
  /**
   * reverse
   * @param {Array<integer>} arr array to be reversed
   * @param {number} from reverse from
   * @param {number} to reverse to
   */
  const reverse=(arr,from,to)=>{
    // loop from "from" to the half way of the array i.e., (from+to)/2
    for(let i=from;i<((from+to)/2);i++){
      // swap the elements, i to to+from-i
      const temp=arr[i];
      arr[i]=arr[from+to-i];
      arr[from+to-i]=temp;
    }
  }
  console.log(arr);
  // reverse the first part i.e., arr of 0 to d
  reverse(arr,0,d-1);
  console.log(arr);
  // reverse the second part i.e., arr of d+1 to n
  reverse(arr,d,n-1);
  console.log(arr);
  // reverse the whole array i.e., arr of 0 to n
  reverse(arr,0,n-1);
  console.log(arr);

  return arr;
}

const res=rotateArr(arr,steps,n);
console.log(res);
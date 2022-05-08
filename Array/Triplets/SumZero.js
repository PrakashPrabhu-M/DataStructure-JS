// https://practice.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1/?page=1&category[]=two-pointer-algorithm&sortBy=submissions
// v1
function findTriplets(arr, n){
  //your code here
  // sort the array
  arr.sort((a, b) => a - b);

  // x+y=-z
  // take first num from the array
  for (let i = 0; i < arr.length; i++) {
    // use two pointers starting from first num+1 till the end
    let begin = i + 1,
      end = arr.length - 1;
    while (end > begin) {
      // find if they sum upto - z
      if (arr[begin] + arr[end] === -arr[i]) return true;
      if (arr[begin] + arr[end] > -arr[i]) end--;
      else begin++;
    }
  }
  return false;
}

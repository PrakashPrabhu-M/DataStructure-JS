function maxSubarraySum(arr,num){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length<num)
    return null;
    
  //   initialize start pointer at 0 and end pointer at num-1
  let start=0,end=num-1;
  
  // initialize a max variable with -Infinity
  let max=-Infinity;
  
  // Iterate through the arr from start through end pointer and accumulate the value to temp_sum
  let temp_sum=0;
  for(let i=start;i<=end;i++)
      temp_sum+=arr[i];
  
  // initialize a while loop where end<arr.length
  while(end<arr.length-1){
  // check if the max<temp_sum
  // if true, set max=temp_sum
  max = (max<temp_sum) && parseInt(temp_sum);
  
  // subtract the value of arr[start] from the temp_max and add arr[end+1] till end<arr.length
  temp_sum=temp_sum-arr[start]+arr[end+1];
  start++;
  end++;
  }
  
  // return the maximum of max and temp_max
  return Math.max(temp_sum,max);
  }

  const res=maxSubarraySum([1,4,2,10,23,3,1,0,20],4);
  console.log(res);
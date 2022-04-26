function minSubArrayLen(arr,num){
    // initialize two pointers, start and end with 0
    let start=0,end=0;
    
    // initialalize sum with arr[end] and check if it is equal to or greater than num
    let sum=arr[end];
    while(sum<num){
        // if lesser, increment the end and add arr[end] to sum till it is greater or equal, you'll get end of window from this
        end++;
        sum+=arr[end];
    }
    if(isNaN(sum)) return 0;
    
    // store the value of end-start+1 in res variable
    let res=end-start+1;
    
    // loop through the array with end as the looping variable
    while (end<arr.length){
     // subtract the value of begin from sum
     sum-=arr[start];
     start++;
     
    // if value of sum is still equal or greater than num, update the value of res (end-start+1) and increment the begin pointer
    if(sum>=num){
        res=end-start+1;
    }
    // else increment the end pointer   
    else{
        end++;
        sum+=arr[end]
    }
    }
    // after loop return the res
    return res;
}
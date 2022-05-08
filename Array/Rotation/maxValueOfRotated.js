// Find maximum value of Sum( i*arr[i]) with only rotations on given array allowed
// https://www.geeksforgeeks.org/find-maximum-value-of-sum-iarri-with-only-rotations-on-given-array-allowed/
// v1
// Input: arr[] = {1, 20, 2, 10}
// Output: 72
// We can get 72 by rotating array twice.
// {2, 10, 1, 20}
// 20*3 + 1*2 + 10*1 + 2*0 = 72

// r0=1*0 20*1 2*2 10*3
// r1=20*0 2*1 10*2 1*3
// r0 = a[0]*0 + a[1]*1 + a[2]*2 + a[3]*3
// r1 = a[3]*0 + a[0]*1 + a[1]*2 + a[2]*3

// r1 - r0 = (a[0] + a[1]*2 + a[2]*3) - (a[1] + a[2]*2 + a[3]*3)
// a[0] + a[1] + a[2] - a[3]*3
// a[0] + a[1] + a[2] + a[3] - a[3]*4

function maxSum(arr,n){
    // calculate sum of array and make it as r0
    const sum=arr.reduce((a,b)=>a+b);
    let r0=0;
    for(let i=0;i<n;i++)
        r0+=arr[i]*i;
    const r=[r0];
    // calculate rj from the formula r0 - a[n-j]*n for r1,r2,...,rn
    for(let i=1;i<n;i++){
        const r_next=sum-arr[n-i]*n+r[i-1];
        r.push(r_next);
    }
    // return the max of r's
    console.log(r);
    return Math.max(...r);
}

const arr=[1, 20, 2, 10];
const res=maxSum(arr,arr.length);
console.log(res);

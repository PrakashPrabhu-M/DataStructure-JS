// https://www.geeksforgeeks.org/array-rotation/?ref=lbp
// v1
const arr=[1,2,3,4,5];
const steps=6;
const n=arr.length;

console.log(rotateArr(arr,steps,n));

function rotateArr(arr,d,n){
    d=d%n;
    // store the first d elements in a temp array
    const temp=arr.slice(0,d);

    // rearrange the array overwriting the first d elements with index+d el
    for(let i=0;i<n-d;i++)
        arr[i]=arr[i+d];
    
    // rearrange the array overwritting the last d elements with temp array
    for(let i=n-d;i<n;i++)
        arr[i]=temp[i-n+d]
    return arr;
}
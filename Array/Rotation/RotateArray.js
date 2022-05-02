// https://www.geeksforgeeks.org/array-rotation/?ref=lbp

const arr=[1,2,3,4,5];
const steps=2;
const n=arr.length;

console.log(rotateArr(arr,steps,n));

function rotateArr(arr,d,n){
    d=d%n;
    // store the part that needs to be transferred in a temp array
    const temp=arr.slice(0,d);

    // rearrange the array
    for(let i=0;i<n-d;i++)
        arr[i]=arr[i+d];

    // append the temp array to it
    for(let i=n-d;i<n;i++)
        arr[i]=temp[i-n+d];

    return arr;
}
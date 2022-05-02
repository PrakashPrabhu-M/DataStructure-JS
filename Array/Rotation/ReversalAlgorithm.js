// https://www.geeksforgeeks.org/program-for-array-rotation-continued-reversal-algorithm/?ref=lbp
const arr=[1,2,3,4,5];
const steps=2;
const n=arr.length;

const rotateArr=(arr,d,n)=>{
    d=d%n;
    const reverse=(arr,n)=>{
        for(let i=0;i<n/2;i++){
            const temp=arr[i];
            arr[i]=arr[n-i-1];
            arr[n-i-1]=temp;
        }
    }
    // split the array into two parts i.e array till d and array after d and name then A and B
    const A=arr.slice(0,d);
    const B=arr.slice(d,n); //arr.slice(d);

    // reverse A to get ArB
    // reverse B to get ArBr => (AB)r
    // reverse the whole to get BA i.e ((AB)r)r

    // reverse A
    reverse(A,A.length);

    // reverse B
    reverse(B,B.length);

    // ArBr
    A.push(...B);

    // reverse ArBr to get BA
    reverse(A,n);
    return A;
}

console.log(rotateArr(arr,steps,n));
// a=[5,4,2,1]

const bubbleSort=(arr)=>{
    // compares the first element with second
    // swaps if first is greater than second
    // loop n times
    // if no swap occurs in a pass then break the loop
    let isSwap;
    for(let i=0;i<arr.length;i++){
        isSwap=false;
        for(let j=0;j<arr.length-i;j++)
            if(arr[j]>arr[j+1])
                swap(arr,j,j+1);
            if(!isSwap)
                break;
    }
    function swap(arr,i,j){
        isSwap=true;
        arr[i]=arr[i]+arr[j];
        arr[j]=arr[i]-arr[j];
        arr[i]=arr[i]-arr[j];
    }
    return arr;
}

const res=bubbleSort([5,4,3,2,1]);
console.log(res);
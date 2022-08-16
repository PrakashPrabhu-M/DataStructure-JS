function mergeSort(arr){
    const merge=(arr1,arr2)=>{
        let i=0, j=0;
        let array=[];
        while(i<arr1.length && j<arr2.length){
            if(arr1[i]<arr2[j]) array.push(arr1[i++]);
            else array.push(arr2[j++]);
        }
        if(i!==arr1.length) array=array.concat(arr1.slice(i));
        if(j!==arr2.length) array=array.concat(arr2.slice(j));

        return array;
    }


    const sort=(arr)=>{
        if(arr.length<=1) return arr;
        const mid=Math.floor(arr.length/2);
        const left=arr.slice(0,mid);
        const right=arr.slice(mid);
        return merge(sort(left),sort(right));
    }
    return sort(arr);
}

const res=mergeSort([5,4,3,2,1]);
console.log(res);
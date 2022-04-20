// const arr1=Array.from(prompt('Array 1: '));
// const arr2=Array.from(prompt('Array 2: '));
const arr1=[1,2,3];
const arr2=[1,4,9];

function same(arr,sqr){
    // Both array length should be equal
    if(arr.length!==sqr.length)
        return false;
    
    // Get frequency of first array in an object
    arrFreq={}
    for(let char of arr)
        arrFreq[char]=(arrFreq[char]||0)+1;
    
    // Get frequency of second array in an object
    squFreq={}
    for (let char of sqr)
        squFreq[char]=(squFreq[char]||0)+1;
    
    // Iterate through the first array and for all values of the array check if it's square is present
    for (let char of arr) {
        if(!(String(char**2) in squFreq))
            return false;
        
        // If present, check for it's frequency
        if(arrFreq[char]!==squFreq[char**2])
            return false;
    }
    return true;
}

const res=same(arr1,arr2);
console.log(res);
// const string1=prompt("Type a string: ");
// const string2=prompt("Type another string: ");

const string1='cinema';
const string2='iceman';

const anagram=(str1,str2)=>{
    // if lengths are not equal return false
    if(str1.length!==str2.length)
        return false;
    
    // iterate through the first string and store the frequency of characters in an object
    const frequency_1={};
    for (let char of str1)
        frequency_1[char]=(frequency_1[char]||0)+1;
    
    // iterate through the second string and store the frequency of characters in an object
    const frequency_2={};
    for (let char of str1)
        frequency_2[char]=(frequency_2[char]||0)+1;
    
    // iterate through the keys of first object and check if they exists in the second object
    for (let char of Object.keys(frequency_1)) {
        if (!(char in frequency_2))
            return false;
        
        // if they exists check whether the frequency are same   
        if(frequency_1[char]!=frequency_2[char])
            return false;
    }
    return true;
}

const res=anagram(string1,string2);
console.log(res);
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Input : 3 4 0 2 0 5 0 1 8 9 0 7
// Output: 3 4 2 5 1 8 9 7 0 0 0 0
// v1
/**
 * move
 * @param {Array<number>} arr input array
 * @returns {Array<number>} output array
 */
function move(arr) {
  // initialize two pointers for lest non-zero and scout
  // both the pointers starts at 0
  let lnz = 0,
    scout = 1;

  for (let i = 0; i < arr.length; i++)
    if (arr[i] !== 0) {
      lnz = i;
      const temp = arr[0];
      arr[0] = arr[lnz];
      arr[lnz] = temp;
      break;
    }
  lnz = 0;
  // iterate through the array using scout as looping varuable
  for (scout; scout < arr.length; scout++) {
    // check whether the lnz is non-zero element, if yes, store the index in lnz
    // check if the scout is non-zero element, if yes, swap the value of scout with lnz+1 and increment the lnz pointer
    if (arr[scout] !== 0) {
      lnz++;
      const temp = arr[scout];
      arr[scout] = arr[lnz];
      arr[lnz] = temp;
    }
  }

  // return the array
  return arr;
}

const res = move([0, 0, 0, 0, 3, 4, 0, 2, 0, 5, 0, 1, 8, 9, 0, 7]);
console.log(res);

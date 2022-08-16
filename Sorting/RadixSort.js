const RadixSort = (arr) => {
  // 5 4 3 2 1
  function getDigit(num, digit) {
    return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
  }

  function noOfDigits(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  let highestDigit = -Infinity;
  arr.forEach((element) => {
    const temp = noOfDigits(element);
    if (temp > highestDigit) highestDigit = temp;
  });

  for (let i = 0; i < highestDigit; i++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let element of arr) {
      const digit = getDigit(element, i);
      bucket[digit].push(element);
    }

    arr = [].concat(...bucket);
  }
  return arr;
};

const res = RadixSort([10, 20, 30, 40, 2, 290, 432, 28, 1]);
console.log(res);
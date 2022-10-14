function solution (roman) {
  let conv = {
    "M" : 1000, 
    "CM" : 900, 
    "D" :500 ,
    "CD" : 400, 
    "C" :100 ,
    "XC" : 90 ,
    "L" :50 ,
    "XL" : 40 ,
    "X" :10 ,
    "IX" : 9 ,
    "V" :5 ,
    "IV" : 4 ,
    "I" :1,
  };
  let arr = roman.split('');
  let result = 0;
  let current;
  let currentValue;
  let next;
  let nextValue;

  for(let i = 0; i<arr.length; i++){
    current = arr[i];
    currentValue = conv[current];

    next = arr[i+1];
    nextValue = conv[next];

    if(currentValue<nextValue){
      result -= currentValue;
    }else{
      result += currentValue;
    }
  }
  return result;
};

console.log(solution('MMMCMXCIII'));
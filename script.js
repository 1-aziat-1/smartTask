var uniqueInOrder=function(iterable){
  let result = [];
  let n;
  for(i=0; i<=iterable.length-1; i++){
    if(iterable[i] !== n){
      result.push(n=iterable[i]);
    }
  }
  return result;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
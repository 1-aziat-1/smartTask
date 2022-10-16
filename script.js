function reverse(str){
  if (str.trim().length === 0) return ''
  let arr = str.split(' ');
  return arr.map((item)=>{
    if(arr.indexOf(item) % 2 !== 0){
      item = item.split('').reverse().join('');
    }
    return item;
  }).join(' ');
}

console.log(reverse('       '));
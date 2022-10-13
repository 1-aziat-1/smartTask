function toCamelCase(str){
  let arr = str.split(/[-_]/);
  arr = arr.map((item) => {
    if(arr.indexOf(item) === 0) return item;
    return item[0].toUpperCase() + item.slice(1);
  });
  return arr.join('');
}

console.log(toCamelCase('the-stealth_warrior'));
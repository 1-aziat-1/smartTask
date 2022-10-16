function deleteNth(arr,n){
  let map = new Map();
  let result = [];
  for(let i of arr){
    let z = map.get(i);
    if(z>=n) continue;
    result.push(i);
    if(z){
      map.set(i,++z);
    }else{
      map.set(i,1);
    }
  }
  console.log(map);
  return result
}
console.log(deleteNth([20,37,20,21,], 1));
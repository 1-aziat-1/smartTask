decodeMorse = function(morseCode){
  let result = '';
  let arr = morseCode.split('   ');
  let mas = [];
  for (let i of arr){
    mas.push(i.split(' '));
  }
  for(let i of mas){
    for(let j of i) {
      if(j.length === 0) continue;
      result += MORSE_CODE[j];
    }
    result += ' ';
  }
  return result;
};

console.log(decodeMorse('     ··· −−− ···'));
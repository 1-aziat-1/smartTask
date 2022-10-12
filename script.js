function palindrome(string) {
  let strin = string.toLowerCase().replace(/[.,\/#!\ \$%\^&\*;:{}'=\-_`~()]/g,"");
  let arr = strin.split('').reverse().join("");
  return strin === arr;
}
console.log(palindrome("Abba Zabba, you're my only friend"));


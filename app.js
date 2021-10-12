
let str1 = 'JAVASCRIPT is the Programming Language for the Web. JAVASCRIPT can update and change both HTML and CSS.'


const countVowels2 = (str) => {
  return str.toLowerCase().split('').filter(el => 'a,o,i,u,e'.includes(el)).length
}

console.log(countVowels2(str1))



// const countVowels = (str) => str.match(/[a,o,i,u,e]/ig).length

// console.log(countVowels(str1)) 



// The goal of this exercise is to convert a string to a new string where each character
// in the new string is "(" if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples: 
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"

function duplicateEncode(word){
    let wordObj = {};
    let result = '';
  
    word.toLowerCase().split('').forEach((value) => {
      wordObj[value] ? wordObj[value] += 1 : wordObj[value] = 1;
    })
  console.log(wordObj)
    for (let i = 0; i < word.length; i++) {
      if (wordObj[`${word[i].toLowerCase()}`] > 1) {
        result += ')'
      }
      else { result += '('};
    }
  
    return result;
  }
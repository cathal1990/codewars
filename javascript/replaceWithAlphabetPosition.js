// Given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// Example:
// alphabetPosition("The sunset sets at twelve o' clock.") 
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let letterArray = text.toLowerCase().split(' ').join().split('');
    let result = [];
  
    for (let i = 0; i < letterArray.length; i++) {
      if (alphabet.includes(letterArray[i])) {
      result.push(alphabet.indexOf(letterArray[i]) + 1);
      }
      else { continue; }
    }
  
    return result.reduce((acc, letter) => {
      return acc + letter + ' '
    }, '').slice(0, -1);
  }
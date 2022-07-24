//Removes all vowels from input string and returns it

function disemvowel(str) {
    return str.split('').filter((char) => {
        return !'aeiouAEIOU'.includes(char)
    }).join('');
  }


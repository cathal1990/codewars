function disemvowel(str) {
    return str.split('').filter((char) => {
        return !'aeiouAEIOU'.includes(char)
    }).join('');
  }

  console.log(disemvowel('This website is for losers LOL!'))
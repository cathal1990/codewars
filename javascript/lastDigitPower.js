//Optimized
function lastDigit(str1, str2) {
    return +str2 === 0 ? 1 : Math.pow(+str1.slice(-1), +str2.slice(-2) % 4 + 4) % 10
  }




//Almost worked but some specs couldnt pass
function lastDigit(str1, str2){  
    debugger;
    if (str1 === '0' || str2 === '0') { return 1 }
    if (str1[str1.length - 1] === '0') { return 0 }

    let smallResult = 0;
    if (Number(str2) < 7) {
        smallResult = Math.pow(Number(str1), Number(str2));
    }
    let remainder = str2.split('').reduce((a,b) => a + Number(b), 0) % 4;
    if (remainder === 0) { remainder = 4 }

    let result = Math.pow(Number(str1[str1.length - 1]), remainder);

    return smallResult > 0 ? Number(smallResult.toString().slice(-1)) : Number(result.toString().slice(-1))
  }

  
  console.log(lastDigit("39472", "16573"))

function incrementString (str) {
    debugger;
    if (!str) {
        return '1';
    }

    let number = str.split('').filter((char) => {
        if (Number(char) || Number(char) === 0) {
            return char
        }}).join('')

    if (number === '') { return str + '1' }

    let parsedNumber = parseInt(number, 10);


        if (Number(number) === 0) {
            return str.slice(0, -number.length) + number.slice(0, number.length - 1) + '1';
        }

        return str.slice(0, -number.split('').length) + (parsedNumber += 1).toString()
    }


    console.log(incrementString('foobar001'))
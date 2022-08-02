// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString (str) {
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

        return str.slice(0, -number.split('').length) + (parsedNumber += 1).toString().padStart(number.length, '0')
    }


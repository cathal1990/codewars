function validParentheses(parens) {
    debugger;
    if (parens[0] !== '(' || parens[parens.length - 1] !== ')' && parens.length !== 0) {
        return false;
    }

    if (parens.length === 0) {
        return true;
    }

    let openPar = parens.split('').filter((val) => {
        return val === '(';
    }).length

    return parens.length === openPar * 2 ? true : false
}


console.log(validParentheses("())(()"))


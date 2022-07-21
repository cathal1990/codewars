function collatz(n){
    let result = ('' + n);

    while(n > 1) {
        if (n % 2 == 0) {
            n /= 2;
            result += `->${n}`
        }
        else {
            n = (n*3) + 1;
            result += `->${n}`
        }
    }
    return result;
}
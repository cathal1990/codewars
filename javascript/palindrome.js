function pali(str) {
  let palindrome = str
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .match(/[a-z0-9]+/g)
    .join("");

  return palindrome === palindrome.split("").reverse().join("") ? true : false;
}

console.log(pali("A man, a plan, a canal: Panama"));

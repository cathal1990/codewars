function anagrams(word, words) {
    let mapped = words.map((word) => word.split('').sort().join(''));
    return mapped.reduce((acc, mapWord, i) => {
        if (mapWord === word.split('').sort().join('')) {
            acc.push(words[i]);
            return acc
        }
        return acc
    }, [])
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
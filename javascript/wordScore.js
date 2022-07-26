// Given a word(lowercase only), and a set of tiles that can be used to make a 
//     word (also a string, each tile is a char or underscore ), determine the point value
//      possible for the word. The underscore represents a blank tile that can stand in for
//      any letter but has a zero score.AudioWorkletNode. 

//      Points per tile are: 

// a:1, b:3, c:3, d:2, e:1, f:4, g:2, h:4, i:1, j:8, k:5, l:1, m:3, 
// n:1, o:1, p:3, q:10, r:1, s:1, t:1, u:1, v:4, w:4, x:8, y:4, z:10, _:0

// Example: 
//     word: cat
//     tiles: tmoca
//     result: 5 (3 + 1 + 1)

let scores = {
    a:1, b:3, c:3, d:2, e:1, f:4, g:2, h:4, i:1, j:8, k:5, l:1, m:3,
    n:1, o:1, p:3, q:10, r:1, s:1, t:1, u:1, v:4, w:4, x:8, y:4, z:10, _:0
}

function wordScore(str, tiles) {
    let keys = Object.keys(scores);
    let result = 0;

    tiles.split('').forEach((char) => {
        if (str.includes(char) && char !== '_') {
            result += scores[char]
        }
    })

    return result;
}

console.log(wordScore('cat', 'tmoa_'))
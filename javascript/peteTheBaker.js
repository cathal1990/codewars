function cakes(recipe, available) {
    let recipeKeys = Object.keys(recipe);
    let availableKeys = Object.keys(available);
    let result = {};

    for (let i = 0; i < recipeKeys.length; i++) {
        if (recipe[recipeKeys[i]] < 1) { continue; }

        if (!availableKeys.includes(recipeKeys[i])) {
            return 0;
        }

        if (recipe[recipeKeys[i]] > available[recipeKeys[i]]) {
            return 0;
        }
        result[recipeKeys[i]] = Math.floor(available[recipeKeys[i]] / recipe[recipeKeys[i]]);
    }
    return Object.values(result).reduce((acc, val) => {
        if (val < acc) {acc = val}
        return acc
    })
  }


let recipe = { cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100 }
let available = { sugar: 1700, flour: 20000, milk: 20000, oil: 30000, cream: 5000 }

console.log(cakes(recipe, available))


// Optimized solutions

// function cakes(recipe, available) {
//     return Math.min(...Object.keys(recipe).map(e => available[e]/recipe[e]>>0));
// }


// function cakes(recipe, available) {
//     return Object.keys(recipe).reduce(function(val, ingredient) {
//       return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
//     }, Infinity)  
//   }


// const cakes = (needs, has) => Math.min(
//     ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
//   )



function moveZeros(arr) {

    let filtered = arr.filter((num) => {
        return num !== 0;
    })

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            filtered.push(0);
        }
    }
    return filtered;
  }
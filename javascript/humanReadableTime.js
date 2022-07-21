function humanReadable (amountOfSeconds) {
    let hours = amountOfSeconds / 60 / 60;
    let minutes = 60 * (hours % 1);
    let seconds = 60 * (minutes % 1);

    return `${(Math.floor(hours) + "").padStart(2, "0")}:${(Math.floor(minutes) + "").padStart(2, "0")}:${(Math.round(seconds) + "").padStart(2, "0")}`
  }


  console.log(humanReadable(45296))    // Expect "12:34:56"
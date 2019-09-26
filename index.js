function scaleBalance(strArr) {
  // [5, 9], [1, 2, 6, 7]
  // 1 or 2 weights to be added to either side to balance the first array
  // return a comma separated string of the weights used in ascending order,
  // e.g. "2,6"
  // else output "not possible"

  // 1) find the difference between the left and the right values
  // 2) look for a weight that matches the difference and return
  // 3) look for two weights added together that matches the difference
  // 4) look for two weights subtracted that matches the difference
  // 5) if two weights, order them by value ascending and return

  let difference = Math.abs(strArr[0][0] - strArr[0][1]);

  // look for single weight
  for (let i = 0; i < strArr[1].length; i++) {
    if (difference === strArr[1][i]) {
      return strArr[1][i].toString();
    }
  }

  // look for two weights together
  for (let i = 0; i < strArr[1].length; i++) {
    for (let j = i + 1; j < strArr[1].length; j++) {
      // look for two weights added together
      if (strArr[1][i] + strArr[1][j] === difference) {
        // order weights
        if (strArr[1][i] < strArr[1][j]) {
          return strArr[1][i].toString() + "," + strArr[1][j].toString();
        } else return strArr[1][j].toString() + "," + strArr[1][i].toString();
      }
      // look for two weights subtracted
      if (Math.abs(strArr[1][i] - strArr[1][j]) === difference) {
        // order weights
        if (strArr[1][i] < strArr[1][j]) {
          return strArr[1][i].toString() + "," + strArr[1][j].toString();
        } else return strArr[1][j].toString() + "," + strArr[1][i].toString();
      }
    }
  }
  return "not possible";
}

module.exports = scaleBalance;

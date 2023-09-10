// Returns the sum of all the values from fromN up to toN
function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  }
  return fromN + sum(fromN + 1, toN);
}

module.exports = sum;

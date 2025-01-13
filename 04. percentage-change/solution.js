function calculatePercentageChange(original, newAmount) {
  if (original === 0 && newAmount === 0) {
    return 0;
  }
  if (original === 0) {
    return newAmount > 0 ? Infinity : -Infinity;
  } else {
    return Math.round(((newAmount - original) / original) * 100);
  }
}

module.exports = { calculatePercentageChange };

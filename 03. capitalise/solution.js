function capitalise(word) {
  if (word.trim() === "") {
    return word;
  }

  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

module.exports = { capitalise };

const addFunction = (...numbers) => {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result < 0 ? 0 : result;
};

module.exports = addFunction;

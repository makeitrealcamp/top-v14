const esPar = (number) => {
  if (typeof (number) !== 'number') throw new Error('Not a number')
  if (number < 0) return 0

  return number % 2 === 0 ? `el numero ${number} es par` : `el numero ${number} es impar`

}

module.exports = esPar
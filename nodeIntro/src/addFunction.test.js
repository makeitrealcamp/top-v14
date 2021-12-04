const addFunction = require("./addFunction")

describe('test add function', () => {
  it('add array numbers', () => {
    // code to be tested
    expect(addFunction(1, 2, 3)).toBe(6)
  })

  it('returs 0 if argument value is negative', () => {
    expect(addFunction(-1, -2, -3)).toBe(0)
  })
})

// crear una funcion para definir si un numero es par o impar
/*
solo numero+
mayor = a 0
return el numero @ es par/impar
*/




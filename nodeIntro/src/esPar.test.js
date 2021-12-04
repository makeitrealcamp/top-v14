const esPar = require("./esPar");

describe(' es par function', () => {
  test('that the argument is a number', () => {
    expect(() => esPar('3')).toThrow('Not a number')
  })

  test('should return 0 if the argument is < 0', () => {
    expect(esPar(-8)).toBe(0)
  });

  test('should show is a par', () => {
    expect(esPar(2)).toBe('el numero 2 es par')
  });

  test('should show is a impar', () => {
    expect(esPar(1)).toBe('el numero 1 es impar')
  });

});
export const add = (a, b) => {
  if (!a || !b) throw new Error('Not numbers')
  return a + b

}
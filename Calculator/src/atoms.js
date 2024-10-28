// atoms.js
import { atom, selector } from 'recoil'

// Atoms to store the numbers and selected operation
export const num1Atom = atom({
  key: 'num1',
  default: 0,
})

export const num2Atom = atom({
  key: 'num2',
  default: 0,
})

export const operationAtom = atom({
  key: 'operation',
  default: 'add', // default operation
})

// Selector to calculate the result based on the selected operation
export const resultSelector = selector({
  key: 'result',
  get: ({ get }) => {
    const num1 = get(num1Atom)
    const num2 = get(num2Atom)
    const operation = get(operationAtom)

    switch (operation) {
      case 'add':
        return num1 + num2
      case 'subtract':
        return num1 - num2
      case 'multiply':
        return num1 * num2
      case 'divide':
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by 0'
      default:
        return 0
    }
  },
})

import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { num1Atom, num2Atom, operationAtom, resultSelector } from './atoms'

function App() {
  return (
    <RecoilRoot>
      <Calculator />
    </RecoilRoot>
  )
}

function Calculator() {
  const [num1, setNum1] = useRecoilState(num1Atom)
  const [num2, setNum2] = useRecoilState(num2Atom)
  const [operation, setOperation] = useRecoilState(operationAtom)
  const result = useRecoilValue(resultSelector)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Recoil Calculator</h1>
      
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="Enter first number"
        />
      </div>
      
      <div>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Enter second number"
        />
      </div>
      
      <div>
        <button onClick={() => setOperation('add')}>Add</button>
        <button onClick={() => setOperation('subtract')}>Subtract</button>
        <button onClick={() => setOperation('multiply')}>Multiply</button>
        <button onClick={() => setOperation('divide')}>Divide</button>
      </div>
      
      <h2>Result: {result}</h2>
    </div>
  )
}

export default App

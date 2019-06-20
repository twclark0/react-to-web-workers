import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

const calcFib = n => {
  if (n < 2) {
    return n
  }
  return calcFib(n - 1) + calcFib(n - 2)
}

function App() {
  const [fib, updateFib] = useState(45)
  useEffect(() => {
    updateFib(calcFib(fib))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{fib}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

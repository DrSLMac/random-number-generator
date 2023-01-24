import { useState } from 'react'
import './App.css'

function App() {
  const [randomNumber, setRandomNumber] = useState(0)

  const generateNumber = (max) => {
    return Math.floor(Math.random() * max)
  }

  return (
    <div className='app'>
      <div className='card'>
        <h1>Random Number Generator</h1>

        <h2 className={randomNumber > 0 ? "positive" 
                      : randomNumber < 0 ? "negative" 
                      : null}
        >
          {randomNumber}
        </h2>

        <hr className='line'></hr>

        <div className='button-container'>
          <button className='button reset' onClick={() => setRandomNumber((randomNumber) => randomNumber = generateNumber(500))}>↩ Generate</button>
        </div>

      </div>
    </div>
  )
}

export default App

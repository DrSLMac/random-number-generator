import { useState } from 'react'
import './App.css'

function App() {
  const [randomNumber, setRandomNumber] = useState(0)
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [disable, setButtonDisable] = useState(true)

  const generateNumber = (min, max) => {
    if (!min || !max) {
      alert("Please enter minimum and maximum numbers")
    } else {
      setButtonDisable(false)
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
  }

  const resetInput = () => {
    setMax('');
    setMin('');
    setRandomNumber(0);
  }

  return (
    <div className='app'>
      <div className='card'>
        <h1>Random Number Generator</h1>

        <h2 className={randomNumber > 0 ? "positive" 
                      : randomNumber < 0 ? "negative" 
                      : null}
        >
          {randomNumber || 0}
        </h2>

        <hr className='line'></hr>

        <div className='button-container'>
          <div className='input-button-wrapper'>
            <div className='input-fields'>
              <div className='min-num'>
                <label>Minimum Number</label>
                <input className='field' value={min} onInput={e => setMin(e.target.value)} type="number" placeholder='Enter Number'></input>
              </div>
              <div className='max-num'>
                <label>Maximum Number</label>
                <input className='field' value={max} onInput={e => setMax(e.target.value)} type="number" placeholder='Enter Number' required></input>
              </div>
            </div>
            <div>
              <button className='button clear' onClick={() => resetInput()}>Clear Input</button>
            </div>
          </div>

          <button className='button generate' onClick={() => setRandomNumber((randomNumber) => randomNumber = generateNumber(min, max))}>🪄 Generate</button>
        </div>

      </div>
    </div>
  )
}

export default App

import './App.css'
import React, { useState, useEffect, useMemo } from 'react'

import Guruji from './Guruji'
import Timer from './Timer'
import Start from './Start'
import { data } from './data'

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timer, setTimer] = useState(false)
  const [earned, setEarned] = useState('$ 0')
  const [username, setUsername] = useState(null)

  const moneypyramid = useMemo(
    () => [
      { id: 16, amount: ' ₹ 10000000' },
      { id: 15, amount: ' ₹ 5000000' },
      { id: 14, amount: ' ₹ 2500000' },
      { id: 13, amount: ' ₹ 1000000' },
      { id: 12, amount: ' ₹ 500000' },
      { id: 11, amount: ' ₹ 200000' },
      { id: 10, amount: ' ₹ 100000' },
      { id: 9, amount: ' ₹ 50000' },
      { id: 8, amount: ' ₹ 25000' },
      { id: 7, amount: '₹ 10000 ' },
      { id: 6, amount: ' ₹ 5000' },
      { id: 5, amount: ' ₹ 2000' },
      { id: 4, amount: ' ₹ 1000' },
      { id: 3, amount: ' ₹ 500' },
      { id: 2, amount: ' ₹ 200' },
      { id: 1, amount: ' ₹ 100' },
    ],
    []
  )

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneypyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [moneypyramid, questionNumber])

  return (
    <div className='container'>
      {username ? (
        <>
          <div className='main'>
            {timer ? (
              <h1 className='earned'>You Earned : {earned}</h1>
            ) : (
              <>
                <div className='top'>
                  <div className='timer'>
                    <Timer
                      setTimer={setTimer}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className='bottom'>
                  <Guruji
                    timer={timer}
                    data={data}
                    setTimer={setTimer}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className='pyramid'>
            <ul className='moneyList'>
              {moneypyramid.map((money) => {
                return (
                  <li
                    className={
                      questionNumber === money.id
                        ? 'moneyListItem active'
                        : 'moneyListItem'
                    }
                  >
                    <span className='moneyListItemNUmber'>{money.id}</span>
                    <span className='moneyListAmount'>{money.amount}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  )
}

export default App

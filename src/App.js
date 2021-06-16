import './App.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1)

  const moneypyramid = [
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
  ]
  return (
    <div className='container'>
      <div className='main'>Question</div>
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
    </div>
  )
}

export default App

import './App.css'
import React, { useState, useEffect, useMemo } from 'react'
import Guruji from './Guruji'

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timer, setTimer] = useState(false)
  const [earned, setEarned] = useState('$ 0')

  const data = [
    {
      id: 1,
      question: 'Why so JavaScript and Java have similar name?',
      answers: [
        {
          text: 'JavaScript is a stripped-down version of Java',
          correct: false,
        },
        {
          text: 'JavaScript’s syntax is loosely based on Java’s',
          correct: true,
        },
        {
          text: 'They both originated on the island of Java',
          correct: false,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        'When a user views a page containing a JavaScript program, which machine actually executes the script?',
      answers: [
        {
          text: 'The User’s machine running a Web browser',
          correct: true,
        },
        {
          text: 'The Web server',
          correct: false,
        },
        {
          text: 'A central machine deep within Netscape’s corporate offices',
          correct: false,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: '______ JavaScript is also called client-side JavaScript',
      answers: [
        {
          text: 'Microsoft',
          correct: false,
        },
        {
          text: 'Navigator',
          correct: false,
        },
        {
          text: 'LiveWire',
          correct: true,
        },
        {
          text: 'Native',
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: 'What are variables used for in JavaScript Programs?',
      answers: [
        {
          text: 'Storing numbers, dates, or other values',
          correct: true,
        },
        {
          text: 'Varying randomly',
          correct: false,
        },
        {
          text: 'Causing high-school algebra flashbacks',
          correct: false,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        '_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation',
      answers: [
        {
          text: 'Client-side',
          correct: true,
        },
        {
          text: 'Server-side',
          correct: false,
        },
        {
          text: 'Local',
          correct: false,
        },
        {
          text: 'Native',
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        'What should appear at the very end of your JavaScript? The <script LANGUAGE=”JavaScript”>tag',
      answers: [
        {
          text: 'The </script>',
          correct: true,
        },
        {
          text: 'The <script>',
          correct: false,
        },
        {
          text: 'The END statement',
          correct: false,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question:
        'Which of the following can’t be done with client-side JavaScript?',
      answers: [
        {
          text: 'Validating a form',
          correct: false,
        },
        {
          text: 'Sending a form’s contents by email',
          correct: false,
        },
        {
          text: 'Storing the form’s contents to a database file on the server',
          correct: true,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        'Which of the following are capabilities of functions in JavaScript?',
      answers: [
        {
          text: 'Return a value',
          correct: false,
        },
        {
          text: 'Accept parameters and Return a value',
          correct: false,
        },
        {
          text: 'Accept parameters',
          correct: true,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question:
        'Which of the following are capabilities of functions in JavaScript?',
      answers: [
        {
          text: 'Return a value',
          correct: false,
        },
        {
          text: 'Accept parameters and Return a value',
          correct: false,
        },
        {
          text: 'Accept parameters',
          correct: true,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question:
        'Which of the following is not a valid JavaScript variable name?',
      answers: [
        {
          text: '2names',
          correct: true,
        },
        {
          text: '_first_and_last_names',
          correct: false,
        },
        {
          text: 'FirstAndLast',
          correct: false,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: 'How does JavaScript store dates in a date object?',
      answers: [
        {
          text: 'The number of milliseconds since January 1st, 1970',
          correct: true,
        },
        {
          text: 'The number of days since January 1st, 1900',
          correct: false,
        },
        {
          text: 'The number of seconds since Netscape’s public stock offering',
          correct: false,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        'Which of the following attribute can hold the JavaScript version?',
      answers: [
        {
          text: 'LANGUAGE',
          correct: true,
        },
        {
          text: 'SCRIPT',
          correct: false,
        },
        {
          text: 'VERSION',
          correct: false,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: 'What is the correct JavaScript syntax to write “Hello World”?',
      answers: [
        {
          text: 'System.out.println(“Hello World”)',
          correct: false,
        },
        {
          text: 'println (“Hello World”)',
          correct: false,
        },
        {
          text: 'document.write(“Hello World”)',
          correct: true,
        },
        {
          text: 'response.write(“Hello World”)',
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: 'Inside which HTML element do we put the JavaScript?',
      answers: [
        {
          text: ' <js>',
          correct: false,
        },
        {
          text: '<scripting>',
          correct: false,
        },
        {
          text: '<script>',
          correct: true,
        },
        {
          text: '<javascript>',
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: 'Which types of image maps can be used with JavaScript?',
      answers: [
        {
          text: ' Server-side image maps',
          correct: false,
        },
        {
          text: 'Client-side image maps',
          correct: true,
        },
        {
          text: 'Server-side image maps and Client-side image maps',
          correct: false,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question:
        'Which of the following navigator object properties is the same in both Netscape and IE?',
      answers: [
        {
          text: 'navigator.appCodeName',
          correct: true,
        },
        {
          text: 'navigator.appName',
          correct: false,
        },
        {
          text: 'navigator.appVersion',
          correct: false,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
  ]

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
      <div className='main'>
        {timer ? (
          <h1 className='earned'>You Earned : {earned}</h1>
        ) : (
          <>
            <div className='top'>
              <div className='timer'>30</div>
            </div>
            <div className='bottom'>
              <Guruji
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
    </div>
  )
}

export default App

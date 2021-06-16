import React from 'react'
import { useState, useEffect } from 'react'

const Guruji = ({ data, setTimer, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassName] = useState('answer')

  useEffect(() => {
    setQuestion(data[questionNumber - 1])
  }, [data, questionNumber])

  const handleSelect = (answer) => {
    setSelectedAnswer(answer)
    setClassName('answer active')
    setTimeout(() => {
      setClassName(answer.correct === true ? 'answer correct' : 'answer wrong')
    }, 3000)

    setTimeout(() => {
      if (answer.correct === true) {
        setQuestionNumber(questionNumber + 1)
        setSelectedAnswer(null)
      } else {
        setTimer(true)
        setQuestionNumber(data[0])
      }
    }, 6000)
  }
  return (
    <div className='guruji'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answers.map((answer) => {
          return (
            <div
              onClick={() => handleSelect(answer)}
              className={selectedAnswer === answer ? className : 'answer'}
            >
              {answer.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Guruji

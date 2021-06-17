import React from 'react'
import { useState, useEffect } from 'react'
import useSound from 'use-sound'
import play from './assets/lets play.mp3'
import correct from './assets/correct answer.mp3'
import wrong from './assets/wrong answer.mp3'
import final from './assets/final answer.mp3'
import ansTime from './assets/answertime.mp3'
import queTime from './assets/Question.mp3'

const Guruji = ({
  timer,
  data,
  setTimer,
  questionNumber,
  setQuestionNumber,
}) => {
  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassName] = useState('answer')
  const [letsPlay, FunletsPlay] = useSound(play)
  const [correctAnswer, FunCorrectAnswer] = useSound(correct)
  const [wrongAnswer, FunWrongAnswer] = useSound(wrong)
  const [finalAnswer, FunFinalAnwser] = useSound(final)
  const [ansTimer, FunAnsTimer] = useSound(ansTime)
  const [queTimer, FunQueTimer] = useSound(queTime)

  useEffect(() => {
    letsPlay()
  }, [letsPlay])

  useEffect(() => {
    console.log(questionNumber)
    if (questionNumber < 2) {
      setQuestion(data[questionNumber - 1])
    } else {
      setTimeout(() => {
        setQuestion(data[questionNumber - 1])
        FunCorrectAnswer.stop()
        FunWrongAnswer.stop()
        // setTimeout(() => {
        //   queTimer()
        // }, 1000)
        setTimeout(() => {
          ansTimer()
        }, 500)
      }, 3000)
    }

    console.log(timer)
  }, [data, questionNumber])

  const handleSelect = (answer) => {
    setSelectedAnswer(answer)
    FunletsPlay.stop()
    FunAnsTimer.stop()
    finalAnswer()
    setClassName('answer active')
    setTimeout(() => {
      setClassName(answer.correct === true ? 'answer correct' : 'answer wrong')
    }, 3000)

    setTimeout(() => {
      if (answer.correct === true) {
        FunletsPlay.stop()
        FunFinalAnwser.stop()
        correctAnswer()
        setTimeout(() => {
          setQuestionNumber(questionNumber + 1)
          setSelectedAnswer(null)
        }, 1000)
      } else {
        FunletsPlay.stop()
        FunFinalAnwser.stop()
        wrongAnswer()
        setTimeout(() => {
          setTimer(true)
          setQuestionNumber(data[0])
        }, 1000)
      }
    }, 5000)
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

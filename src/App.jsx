import './App.css'
import FaqList from './components/FaqList'
import Faq from './components/Faq'
import { useState } from 'react'

function App() {
  const faqArr = [
    {
      id: 0,
      question: 'Question 1',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat amet tempore ex sint voluptates quae aperiam facere, assumenda corrupti unde totam! Culpa repudiandae quo reiciendis laboriosam qui dolore aliquid.'
    },
    {
      id: 1,
      question: 'Question 2',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat amet tempore ex sint voluptates quae aperiam facere, assumenda corrupti unde totam! Culpa repudiandae quo reiciendis laboriosam qui dolore aliquid.'
    },
    {
      id: 2,
      question: 'Question 3',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat amet tempore ex sint voluptates quae aperiam facere, assumenda corrupti unde totam! Culpa repudiandae quo reiciendis laboriosam qui dolore aliquid.'
    },
    {
      id: 3,
      question: 'Question 4',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat amet tempore ex sint voluptates quae aperiam facere, assumenda corrupti unde totam! Culpa repudiandae quo reiciendis laboriosam qui dolore aliquid.'
    },
    {
      id: 4,
      question: 'Question 5',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat amet tempore ex sint voluptates quae aperiam facere, assumenda corrupti unde totam! Culpa repudiandae quo reiciendis laboriosam qui dolore aliquid.'
    },
    {
      id: 5,
      question: 'Question 6',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat amet tempore ex sint voluptates quae aperiam facere, assumenda corrupti unde totam! Culpa repudiandae quo reiciendis laboriosam qui dolore aliquid.'
    },
  ]

  const [Active, setActive] = useState(null)

  function onShow(id){
    setActive(id)
    if(id == Active){
      setActive(null)
    }
  }

  return (
    <>
      <FaqList>
        {faqArr.map((element, index) => {
          return <Faq key={element.id} question={element.question} answer={element.answer} isActive={Active == element.id} onShow={() => onShow(element.id)}/>
        })}
      </FaqList>
    </>
  )
}

export default App

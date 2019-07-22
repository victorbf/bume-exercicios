import React from 'react'
import styled from 'styled-components';

const QuestionHeader = ({ title, description }) => {
  const QuestionHead = styled.div`
    margin-bottom: 1rem;
    margin-top: 1rem;
    background: #f5f5f5;
    padding: 1rem;
    h1 {
      margin-top: 0;
    }
  `

  return (
    <QuestionHead>
      <h1>{title}</h1>
      <p>{description}</p>
    </QuestionHead>
  )
}

export default QuestionHeader

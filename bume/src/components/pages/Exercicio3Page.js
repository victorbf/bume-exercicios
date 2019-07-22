import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import QuestionHeader from '../layout/QuestionHeader';

const Exercicio3Page = () => {
  const initialStateArray1 = [
    1, 2, 3, 4
  ];

  const initialStateArray2 = [
    'a', 'b', 'c', 'd'
  ]

  const [array1, setArray1] = useState(initialStateArray1)
  const [array2, setArray2] = useState(initialStateArray2)

  const handleArray1 = () => {
    setArray1([0, ...array1])
  }
  const handleArray2 = () => {
    setArray2([...array2, 'e'])
  }

  const Flex = styled.div`
    display: flex;
    margin-top: 2rem;
    justify-content: space-around;
    align-items: center;
  `

  const Card = styled.div`
    flex: 0 1 calc(33% - 1rem);
    border: 1px solid #eee;
    padding: 0.5rem 2rem 1rem 2rem;

    @media(max-width: 768px) {
      flex: 0 1 calc(50% - 1rem);
    }
    @media(max-width: 480px) {
      flex: 0 1 100%;
    }
  `

  const Button = styled.button`
    margin-top: 1rem;
    float: right;
    padding: 10px;
    color: white;
    background: #1976d2;
  `


  return (
    <Fragment>
      <QuestionHeader
        title="Exercicio 3"
        description="Com o crescimento das tecnologias Front-End o Javascript a
        linguagem mais utilizada entre todas, também não ficou para trás, o
        ES5 e ES6 vieram com várias funcionalidades novas, dentre elas o
        *spread operator*. Com base em seus conhecimentos sobre
        Javascript, construa em HTML/CSS e JS uma página capaz de
        imprimir dois arrays que quando clicar em um botão, seja iterado no
        array um elemento. No primeiro array este elemento deve ser iterado
        no início do array, já o segundo array deve ser iterado no fim.
        Requisitos: É obrigatório o uso do spread operator."
      />
      <Flex>  
        <Card>
          <Flex>
            {array1.map(array => (
              <div>{array}</div>
            ))}
          </Flex>
          <Button onClick={() => handleArray1()}>Adicionar número no inicio da lista</Button>
        </Card>
        <Card>
          <Flex>
            {array2.map(array => (
              <div>{array}</div>
            ))}
          </Flex>
          <Button onClick={() => handleArray2()}>Adicionar string no final da lista</Button>
        </Card>
      </Flex>
      <SyntaxHighlighter>
{`
const handleArray1 = () => {
  setArray1([0, ...array1])
}
const handleArray2 = () => {
  setArray2([...array2, 'e'])
}
`}
      </SyntaxHighlighter>
    </Fragment>
  );
}

export default Exercicio3Page;

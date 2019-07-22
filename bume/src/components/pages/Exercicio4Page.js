import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import QuestionHeader from '../layout/QuestionHeader';

const Exercicio4Page = () => {
  const CardDeck = styled.div`
    display: flex;
    margin-top: 4rem;
    flex-wrap: wrap;
  `

  const Card = styled.div`
    flex: 0 1 calc(33% - 1rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #eee;
    padding: 2rem 0;

    @media(max-width: 768px) {
      flex: 0 1 calc(50% - 1rem);
    }
    @media(max-width: 480px) {
      flex: 0 1 100%;
    }
  `

  const CardBody = styled.div`
    margin-top: 0.5rem;
  `

  return (
    <Fragment>
      <QuestionHeader
        title="Exercício 4"
        description="Num certo projeto de sua empresa, você foi convocado para criar um
        layout que seja responsivo e que funcione tanto em computadores
        com monitores ultra-wide quanto celulares em formato retrato, para
        desenvolver isso você tem em mãos apenas HTML/CSS e Flexbox.
        Construa um componente de acordo com a imagem indicada e que
        seja responsivo para qualquer dispositivo. Uso obrigatório apenas de
        Flexbox."
      />
      <CardDeck>
        <Card>
          <Avatar>A</Avatar>
          <CardBody>
            <strong>Lorem Ipsum</strong>
            <p>Lorem ipsum</p>
          </CardBody>
        </Card>
        <Card>
          <Avatar>B</Avatar>
          <CardBody>
            <strong>Lorem Ipsum</strong>
            <p>Lorem ipsum</p>
          </CardBody>
        </Card>
        <Card>
          <Avatar>C</Avatar>
          <CardBody>
            <strong>Lorem Ipsum</strong>
            <p>Lorem ipsum</p>
          </CardBody>
        </Card>
      </CardDeck>

      <SyntaxHighlighter>
{`const CardDeck = styled.div
  display: flex;
  margin-top: 4rem;
  flex-wrap: wrap;

const Card = styled.div
  flex: 0 1 calc(33% - 1rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
  padding: 2rem 0;

  @media(max-width: 768px) {
    flex: 0 1 calc(50% - 1rem);
  }
  @media(max-width: 480px) {
    flex: 0 1 100%;
  }
`}
      </SyntaxHighlighter>
    </Fragment>
  );
}

export default Exercicio4Page;

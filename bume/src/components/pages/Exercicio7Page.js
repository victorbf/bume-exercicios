import React, { Fragment } from 'react'
import QuestionHeader from '../layout/QuestionHeader';

const Exercicio7Page = () => {
  return (
    <Fragment>
      <QuestionHeader
        title="Exercício 7"
        description="Defina “Promise” e explique algum caso em que podemos utilizar."
        />
      <p>
        Promise é um função asincrona podendo retornar algo a qualquer momento, mesmo depois do component estar carregado.
        Promises são muito utilizadas para fazer <i>requests</i> da api e para o usuário não ficar esperando em uma 
        tela branca tudo que vem do banco para ele, as promises fazem com que o component carregue e o conteudo vá
        carregando gradualmente.
      </p>
    </Fragment>
  )
}

export default Exercicio7Page

import React, { Fragment } from 'react'
import QuestionHeader from '../layout/QuestionHeader';

const Exercicio10Page = () => {
  return (
    <Fragment>
      <QuestionHeader
        title="Exercício 10"
        description="Considerando os códigos de status HTTP, defina o significado do
        retorno de cada um e quando possível dê exemplos práticos dos
        erros que causariam os retornos para os seguintes códigos: 200,
        400, 401, 404, 429 e 500."
      />
      <p>
        <ul>
          <li>
            <strong>200</strong>
            <p>
              é o status de quando a requisição deu certo.
            </p>
          </li>
          <li>
            <strong>400</strong>
            <p>
              é o status de quando a requisição não recebeu o que esperava, normalmente quando se faz um metódo não esperado pela api,
              como um POST em uma api que espera apenas um GET.
            </p>
          </li>
          <li>
            <strong>401</strong>
            <p>
              é o status de quando a requisição não foi autenticada, acontece quando o usúario não está <i>Logado</i> no sistema.
            </p>
          </li>
          <li>
            <strong>404</strong>
            <p>
              é o status de quando a requisição não foi encontrada, costuma acontecer quando é colocado um <i>Endpoint</i> que não existe na api.
            </p>
          </li>
          <li>
            <strong>429</strong>
            <p>
              Após algum tempo trabalhando nunca me ocorreu essa requisição. Fiz uma pesquisa rápida e vi que acontece quando
              o usuário faz vários <i>Requests</i> ao mesmo tempo. Provavelmnete quando caem em um loop infinito no código que envia
              várias vezes o mesmo request.
            </p>
          </li>
          <li>
            <strong>500</strong>
            <p>
              é o status para <i>Internal server error</i>. Na minha experiência ocorreu quando havia erros no Backend
              seja não esperando algum paramêtro enviado ou erros de syntax.
            </p>
          </li>
        </ul>
      </p>
    </Fragment>
  )
}

export default Exercicio10Page

import React, { Fragment } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import QuestionHeader from '../layout/QuestionHeader';

const Exercicio1Page = () => {
  const code1 = 'getUser = () =>  {}'
  const code2 = (
    'singUps(data) = async () => { const res = axios.post(`https://api.testes.com/signup`) return res }'
  )

  return (
    <Fragment>
      <QuestionHeader
        title="Exercicio 1"
        description="Analise o código abaixo, verifique se há problema(s). Caso haja, aponte-o(s) e justifique:"
      />
      <article>
        <p>primeiro erro: faltou a arrow function no chamado da função getUser.</p>
        <SyntaxHighlighter language="javascript">
          {code1}
        </SyntaxHighlighter>
        <p>segundo erro: a função async está com a sintax errada.</p>
        <SyntaxHighlighter language="javascript">
          {code2}
        </SyntaxHighlighter>
      </article>
    </Fragment>
  );
}

export default Exercicio1Page;

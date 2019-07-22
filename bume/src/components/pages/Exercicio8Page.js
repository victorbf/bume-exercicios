import React, { Fragment } from 'react'
import QuestionHeader from '../layout/QuestionHeader';

const Exercicio8Page = () => {
  return (
    <Fragment>
      <QuestionHeader
        title="Exercício 8"
        description="Imagine que você foi designado para fazer uma tarefa onde o
        objetivo é mostrar um determinado componente em uma tela do
        sistema. Esse componente deve ser exibido de formas diferentes em
        algumas resoluções de tela. Considerando que para tal tarefa você
        tenha utilizado de recursos mais recentes de CSS3, explique como
        você testaria essa tela em várias resoluções diferentes e se
        diferentes browsers e versões renderizariam corretamente o
        componente."
      />
      <p>
        Primeiramente após desenvolver o component e o <code>CSS</code> eu utilizo o devTools para mudar as resoluções
        e ir conferindo como o component se comporta nas resoluções pré-definidas do browser. Após conferir (e caso precise
        alterar alguma coisa), eu mudo para meu browser secundário e repito o mesmo processo e por fim vou para browsers
        com menos suporte como Opera, Internet Explorer e Safari para fazer os ultimos testes desta vez em resolução nativa.
      </p>
    </Fragment>
  )
}

export default Exercicio8Page

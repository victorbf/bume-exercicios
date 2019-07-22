import React, { Fragment, Component } from 'react';
import QuestionHeader from '../layout/QuestionHeader';

class Exercicio2Page extends Component {
  state = {
    users: [
      'Matheus',
      'João',
      'Carlos',
      'Luiz',
      'Roberto',
    ]
  }

   shuffle = () => {
    const { users } = this.state;
    var currentIndex = users.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = users[currentIndex];
      users[currentIndex] = users[randomIndex];
      users[randomIndex] = temporaryValue;
    }
    this.setState({ users });
  }

  render() {
    const { users } = this.state;
    return (
      <Fragment>
        <QuestionHeader
          title="Exercicio 2"
          description="
          Ao desenvolver com React/React-Native,
          nos deparamos com um conceito de controle de
          componentes na interface diferente do que somos
          acostumados com o Angular por exemplo.
          O conceito de estados da interface,
          imutável e trazido dos conceitos da programação funcional.
          Sempre que o estado muda,
          o React reconstrói/renderiza a tela novamente com o novo estado.
          Baseado nessas informações,
          construa uma lista com os dados fornecidos,
          que randomize os dados a cada vez que clicar no botão indicado."
        />
        <div>
          <button onClick={this.shuffle}>Random</button>
          <h1>Lista de usuários: </h1>
          {
            users.map((d, i) => (
              <p key={i}>{d}</p>
            ))
          }
        </div>
      </Fragment>
    );
  }
}

export default Exercicio2Page;

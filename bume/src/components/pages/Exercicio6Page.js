import React, { Fragment } from 'react';
import QuestionHeader from '../layout/QuestionHeader';

const Exercicio6Page = () => {
  return (
    <Fragment>
      <QuestionHeader
        title="Exércicio 6"
        description="Pensando em versionamento de arquivos e GIT, considere a seguinte
        situação: Uma equipe de desenvolvimento remota foi contratada
        para fazer algumas atualizações em um grande projeto da sua
        empresa, adicionando novas funcionalidades e atualizando algumas
        já existentes. Para que o projeto fonte &quot;funcionasse&quot; externamente,
        uma configuração precisou ser adicionada em um dos arquivos de
        configuração do código enviado a essa equipe. Internamente (no
        ambiente da sua empresa), o sistema também continuou sendo
        atualizado, também com adição de novas funcionalidades, correção
        de bugs e atualizações de funcionalidades existentes. Paralelamente
        ao trabalho da outra equipe. Ao finalizar as atualizações para quais
        foram contratados, a equipe externa disponibilizou o código-fonte
        
        atualizado para a equipe da filial, para que fossem integradas as
        novas funcionalidades e atualizações. Baseado nos seus
        conhecimentos de versionamento de arquivos (GIT), descreva os
        passos para realização do processo citado a cima de forma que o
        projeto continue funcionando interna e externamente com todas as
        atualizações feitas até o momento final - integração entre os
        códigos e arquivos de ambas as equipes."
      />
      <p>
        Inicialmente existe um repósitorio com um branch para testes conhecido como <strong>Homologação </strong>
        onde ambas equipes começam seus projetos e a trabalhar nas novas funcionalidades, correções de bugs e aprimoramento.
        Para cada um desses aspectos cria-se um branch novo onde o desenvolvedor tanto remoto quando da empresa, começa a trabalhar
        e faz os testes. Quando ele termina algo novo ele faz um <i>Commit</i> e após finalizar faz o <i>merge request </i>
        ou <i>pull request</i> que é revisado por alguém e assim volta para o desenvolvedor caso precise
        fazer alterações ou é adicionado ao ambiente de <strong>Homologação</strong> para novos testes,
        e então quando tudo estiver correto o que o desenvolvedor trabalhou é adicionado a produção da mesma for que seu branch
        foi adicionado em homologação. Com isso evita conflitos de trabalhos e código. Caso aconteça utilizam o <i>rebase </i>
        para correções de conflitos entre códigos.
      </p>
    </Fragment>
  );
}

export default Exercicio6Page;

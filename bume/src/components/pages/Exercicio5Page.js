import React, { Fragment } from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import QuestionHeader from '../layout/QuestionHeader';

const Exercicio5Page = () => {
  const Grid = styled.div`
    display: grid;
    grid-template-areas: "main main aside";
    grid-template-columns: auto auto 250px;
  `
  const Aside = styled.aside`
    grid-area: aside;
    background-color: #f44336;
    padding: 1rem;
    color: white;
  `

  const Main = styled.main`
    grid-area: main;
    background-color: #2196f3;
    padding: 1rem;
  `

  const Article = styled.article`
    background-color: #e0e0e0;
    padding: 1rem;
  `

  return (
    <Fragment>
      <QuestionHeader
        title="Exercício 5"
        description="Observando a imagem abaixo, descreva possíveis soluções para que
        os elementos “aside” e “article” fiquem alinhados horizontalmente."
      />
      
      <Grid>
        <Main>
          <Article>
            <h2>Article 1</h2>
            <p>Ipsum sit ullamco nulla eu esse. Dolor laboris proident quis voluptate aliqua id officia dolor anim. Ea dolor adipisicing laborum sit non ipsum officia occaecat esse irure Lorem anim cupidatat dolore. Irure minim consectetur deserunt ad. Magna cillum laboris commodo Lorem. Non nisi in aliquip deserunt incididunt consequat ea ut.</p>
          </Article>
          <Article>
            <h2>Article 1</h2>
            <p>Ipsum sit ullamco nulla eu esse. Dolor laboris proident quis voluptate aliqua id officia dolor anim. Ea dolor adipisicing laborum sit non ipsum officia occaecat esse irure Lorem anim cupidatat dolore. Irure minim consectetur deserunt ad. Magna cillum laboris commodo Lorem. Non nisi in aliquip deserunt incididunt consequat ea ut.</p>
          </Article>
        </Main>
        <Aside>
          <h2>Aside</h2>
          <p>Ipsum sit ullamco nulla eu esse. Dolor laboris proident quis voluptate aliqua id officia dolor anim. Ea dolor adipisicing laborum sit non ipsum officia occaecat esse irure Lorem anim cupidatat dolore. Irure minim consectetur deserunt ad. Magna cillum laboris commodo Lorem. Non nisi in aliquip deserunt incididunt consequat ea ut.</p>
        </Aside>
      </Grid>
      <SyntaxHighlighter>
{`
  const Grid = styled.div
    display: grid;
    grid-template-areas: "main main aside";
    grid-template-columns: auto auto 250px;
  
  const Aside = styled.aside
    grid-area: aside;
    background-color: #f44336;
    padding: 1rem;
    color: white;
  

  const Main = styled.main
    grid-area: main;
    background-color: #2196f3;
    padding: 1rem;
  

  const Article = styled.article
    background-color: #e0e0e0;
    padding: 1rem;
`}
      </SyntaxHighlighter>
      <SyntaxHighlighter>
        {`
<Grid>
  <Main>
    <Article>
      <h2>Article 1</h2>
      <p>Ipsum sit ullamco nulla eu esse. Dolor laboris proident quis voluptate aliqua id officia dolor anim. Ea dolor adipisicing laborum sit non ipsum officia occaecat esse irure Lorem anim cupidatat dolore. Irure minim consectetur deserunt ad. Magna cillum laboris commodo Lorem. Non nisi in aliquip deserunt incididunt consequat ea ut.</p>
    </Article>
    <Article>
      <h2>Article 1</h2>
      <p>Ipsum sit ullamco nulla eu esse. Dolor laboris proident quis voluptate aliqua id officia dolor anim. Ea dolor adipisicing laborum sit non ipsum officia occaecat esse irure Lorem anim cupidatat dolore. Irure minim consectetur deserunt ad. Magna cillum laboris commodo Lorem. Non nisi in aliquip deserunt incididunt consequat ea ut.</p>
    </Article>
  </Main>
  <Aside>
    <h2>Aside</h2>
    <p>Ipsum sit ullamco nulla eu esse. Dolor laboris proident quis voluptate aliqua id officia dolor anim. Ea dolor adipisicing laborum sit non ipsum officia occaecat esse irure Lorem anim cupidatat dolore. Irure minim consectetur deserunt ad. Magna cillum laboris commodo Lorem. Non nisi in aliquip deserunt incididunt consequat ea ut.</p>
  </Aside>
</Grid>
        `}
      </SyntaxHighlighter>
    </Fragment>
  );
}

export default Exercicio5Page;

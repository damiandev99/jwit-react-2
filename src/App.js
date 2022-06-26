import React from "react";
import styled  from "styled-components";
import Card from "./Card";
import Submenu from './Submenu';

const Container = styled.div`
`

const App = () => {
  return (
    <Container>
      <Card/>
      <Submenu/>
    </Container>
  );
}

export default App;

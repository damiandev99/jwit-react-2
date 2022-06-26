// Contenedor que junte todos

import React from "react";
import styled from "styled-components";
import Options, { Circle, Icon } from "./options";

import Check from "../img/check.svg";
import X from "../img/x.svg";

const Container = styled.div`
  background-color: #21d0d0;
  border-radius: 25px;
  padding-top: 15px;
  height: 200px;
  width: 400px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const App = () => {
    // Vamos a renderizar el Options con props
    const options = [
        { title: "PRICE LOW TO HIGH", state: false },
        { title: "PRICE HIGH TO LOW", state: false },
        { title: "POPULARITY", state: true },
    ];
    return (
        <Container>
            {/* Lo renderizamos de esta manera, al ser un array con props tenemos que usar el metodo map de los arrays */}
            {
                // ? Generamos una funcion flecha con dos valores, v de valor e i de indice del numero del array
                // ? Luego ponemos el key que en este caso es la posicion del array que se va a renderizar y
                // ? luego con el {...v} sirve para traer todos los valores,
                options.map((v, i) => (
                    <Options key={i} {...v} />
                ))
            }
            <Footer>
                {[X, Check].map((v, i) => {
                    return (
                        <Circle visible={true} style={{ height: 60, width: 60, boxShadow: "1px 1px 15px rgba(0,0,0,0.5)", marginRight: 10}}>
                            <Icon src={v} visible={true} style={{ height: 40, width: 40 }} />
                        </Circle>
                    );
                })}
            </Footer>
        </Container>
    );
};

export default App;

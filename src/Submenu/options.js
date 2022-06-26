// Contenedor que junte todos
// ? Aqui vamos a llamar a useState que es un estado interno del componente que va a guardad un avlor, un objeto una fila una variable cualquier cosa. Icluso hasta components
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Check from "../img/check.svg";


const Container = styled.div`
  margin-left: 25px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 25px;
  align-items: center;
`;

const Title = styled.p`
  margin: 0px;
  color: white;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

// ! Botonera
// Ponemos el export para usarlo en otro lado de la app
export const Circle = styled.div`
  border-radius: 50%;
  border: 1.8px solid white;
  height: 35px;
  width: 35px;
  cursor: pointer;
  /* Aqui usamos el props.visible para darle el valor y usamos ? en caso de verdad y : en caso de false */
  background-color: ${(props) => (props.visible ? "white" : "transparent")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// Ponemos el export para usarlo en otro lado de la app
export const Icon = styled.img`
  width: 25px;
  height: 25px;
  object-fit: contain;
  border-radius: 50%;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  fill: aquamarine;
`;

// ? cuando le damos los valores a la App a la fatarrowfunction usamos este valor en el componente en el que vayamos a usarlo
const App = ({ title, state }) => {
    // ! Vamos a trabajar con Hooks
    // ? Creamos una constante con dos valores, visible y setVisible y mediante el hook useState le damos el estado que queramos, false o true
    const [visible, setVisible] = useState(false);

    //? El useEffect nos ayuda a renderizar segun el estado, se encarga de actualizar el componente en diferentes estados de la app, puede ser cuando inicia, cuando se actualiza una var o estado, cualquier cosa puede hacer que renderice este useEffect
    useEffect(() => {
        //? Validamos el estado que este tiene, si es true lo pone visible o si esta false lo setea en false
        setVisible(state);
    }, [state]);

    const handleChange = () => {
        // Con esta variable lo que hacemos es invertir el estado al momento de dar click sobre el circulo
        setVisible(!visible);
    };

    return (
        <Container>
            <Title>
                {/* ? Como ya sabemos que en index.js vamos a darle un valor a este params lo enviamos para que renderice */}
                {title}
            </Title>
            <Circle visible={visible} onClick={handleChange}> 
            <Icon src={Check} visible={visible}/>
            </Circle>
        </Container>
    );
};

export default App;

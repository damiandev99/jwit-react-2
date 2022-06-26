import React from "react";
import styled from "styled-components";

const Container = styled.div`
height: 150px;
width: 350px;
border-radius: 5px;
background-color: #fff0ea;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Title = styled.p`
    color: #f06f37;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 300px;
    text-align: center;
`;

const Button = styled.button`
background-color: #f06f37;
text-transform: uppercase;
color: white;
border: 1px solid #f06f37;
padding: 7px;
padding-left: 25px;
padding-right: 25px;
font-weight: bold;
border-radius: 15px;
opacity: 0.9;
cursor: pointer;
`;


const App = () => {
    return (
    <Container>
        <Title>
        use code: pigi100 for rs.100 off on your first order
        </Title>

        <Button>
            GRAB NOW
        </Button>
    </Container>

    );
};

export default App;

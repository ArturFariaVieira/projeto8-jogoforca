import palavras from "./palavras"
import React from "react"
import styled from "styled-components"
import imagem from "./assets/forca0.png"

export default function Jogo(props) {
    return (
        <Container>
            <Caixaimagem>
                <img src={imagem}/>
            </Caixaimagem>
            <Caixapalavras>
                <button onClick= {() => props.comeca({palavras})}> Escolher Palavra </button>
                <Caixapalavra> </Caixapalavra>
            </Caixapalavras>
        </Container>
    )


    }
const Container = styled.div`
width: 1024px;
height: 428px;
background: white;
padding: 10px;
box-sizing: border-box;
display: flex;
`;
const Caixaimagem = styled.div`
height: 428px;
width: 512px;

img {
    height: 350px;
    width: 250px;
    margin-left: 50px;
    margin-top: 20px;
}`;
const Caixapalavras = styled.div`
height: 350px;
width: 512px;
display: flex;
flex-direction: column;
align-items: center;
button {
    font-size: 20px;
    background-color: green;
    color: white;
    height: 50px;
    width: 200px;
    margin-top: 30px;

    &:hover{
        cursor: pointer;
    }
}

`;
const Caixapalavra = styled.div`
width: 500px;
height: 100px;`;
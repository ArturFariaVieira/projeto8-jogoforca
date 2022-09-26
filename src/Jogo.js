import palavras from "./palavras"
import React from "react"
import styled from "styled-components"
import imagem0 from "./assets/forca0.png"
import imagem1 from "./assets/forca1.png"
import imagem2 from "./assets/forca2.png"
import imagem3 from "./assets/forca3.png"
import imagem4 from "./assets/forca4.png"
import imagem5 from "./assets/forca5.png"
import imagem6 from "./assets/forca6.png"



export default function Jogo(props) {
    let arrayimagens = [imagem0, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6]
    return (
        <Container>
            <Caixaimagem>
                <img src={arrayimagens[props.cont]}/>
            </Caixaimagem>
            <Caixapalavras>
                <button onClick= {() => props.comeca({palavras})}> Sortear Palavra </button>
                <Caixapalavra desaf= {props.desafio} cont = {props.cont}>{props.cont ===6 ? props.fim :props.desafio} </Caixapalavra>
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
position: relative;
align-items: center;
justify-content: center;

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
letter-spacing: 10px;
font-size: 50px;


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
height: 100px;
display: flex;
position: absolute;
right: -100px;
bottom: 10px;
color: ${(props) => props.cont === 6? 'red' : (props.desaf.includes("_") ? 'black': 'green')};
div{
    margin-left: 10px;
    font-size: 60px;
}`

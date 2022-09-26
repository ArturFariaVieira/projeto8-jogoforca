import palavras from "./palavras"
import React from "react"
import styled from "styled-components"

export default function Chute(props){
    return (
        <Caixachute>
            <p>Já sei a palavra!</p>
            <input 
            value = {props.chutar}
            disabled={(props.iniciado === false || props.cont === 6 || !props.desafio.includes("_")) ? true : false }
            onChange={e => props.setchutar(e.target.value)}/>
            <button 
            disabled={(props.iniciado === false || props.cont === 6 || !props.desafio.includes("_")) ? true : false }
            onClick={() =>{props.funcao(props.chutar)}}> Chutar </button>
        </Caixachute>
    )
}
const Caixachute = styled.div`
align-itens: center;
justify-content: center;
height: 100px;
width: 1024px;
padding: 10px;
box-sizing: border-box;
display: flex;
font-size: 16px;
button { 
    height: 50px;
    width: 50px;
    margin-left: 20px;
    &:Disabled{
        background-color: grey;
    }
}
input {
    height: 43px;
    width: 300px;
    margin-left: 20px;
    outline: solid 1px brown;
    &:Disabled{
        background-color: grey;
        outline: solid 1px grey
    }
}
`;

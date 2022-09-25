import palavras from "./palavras"
import React from "react"
import styled from "styled-components"

export default function Chute(){
    return (
        <Caixachute>
            <p>Já sei a palavra!</p>
            <input/>
            <button> Chutar </button>
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
}
input {
    height: 43px;
    width: 300px;
    margin-left: 20px;
}
`;

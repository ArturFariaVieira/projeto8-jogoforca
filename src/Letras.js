
import React from "react"
import styled from "styled-components"
function Botao(props) {
       
   
       return (
           <>
               <button 
               disabled = {(props.iniciado === false || props.clicados.includes(props.index)) ? true : false }
               onClick = {() => {props.funcao(props.index)} }> 
               {props.letra.toUpperCase()}             
               </button>
           </>
       )
   
   
   
   }
 export default function Letras(props) {
       
       const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
       return (
           <Caixabotoes>
               {alfabeto.map(
                (s, index) => 
                <Botao 
                letra={s} 
                iniciado = {props.iniciado} 
                index = {index} 
                funcao = {props.clicados}
                clicados = {props.lista}/>)}
           </Caixabotoes >
               )
   }
   
   const Caixabotoes = styled.div`
   height: 180px;
   width: 1024px;
   padding: 10px;
   box-sizing: border-box;
   justify-content: center;
   button {
       width: 70px;
       height: 70px;
       border-radius: 5px;
       background-color: white;
       margin: 3px;
       margin-bottom:10px;
       text-align: center;    
       border: solid 1px blue;
       font-size: 20px;
   
   
   }`
   
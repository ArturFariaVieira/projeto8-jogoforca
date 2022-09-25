import React from "react"
import styled from "styled-components"
import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"



export default function App() {
    const [comecou, setComecou] = React.useState(false)
    const [clicados, setClicados] = React.useState([])
    let start = function (palavras, props){
    
        console.log(palavras.palavras[Math.floor(Math.random()*(palavras.palavras.length))])
        console.log(Math.floor(Math.random()*(palavras.palavras.length)))
        console.log(props)
        props = false;
        console.log(props)
        setComecou(true)
        setClicados([])
        
        let adivinhada = palavras.palavras[Math.floor(Math.random()*(palavras.palavras.length))]
        
        
    
    }
    let clicou = function (props){
        setClicados([...clicados, props])
        console.log(props)
    }

    
    return (
        <>
            <Jogo comeca = {start}/>
            <Letras iniciado = {comecou} clicados = {clicou} lista = {clicados}/>
            <Chute />
        </>
    )
    
    }





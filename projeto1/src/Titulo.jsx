import { useState } from "react"

function Titulo({nome,paragrafo,cor}) {
    const [texto, setTexto] = useState("Um título de estado inicial")
    const [inputText, setInputText] = useState("")
    //let nome = "Dimitri Teixeira"
    function clicou() {
        setTexto(inputText)
    }
    const soma = 10 + 10
    const urlImg = " https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
    return (
        <div>
            <h1 style={{color:cor}}>Oi eu sou um {nome ? nome: "Fulano"} </h1>
            <img width={150} src={urlImg}  alt="" /> 
            {paragrafo ?
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ut quo porro, est harum earum soluta maiores dignissimos natus explicabo numquam voluptas totam aspernatur perferendis reprehenderit, delectus iure. Distinctio, placeat.</p>
            :
            <p></p>
            }
            <h2>{texto}</h2>
            <input value={inputText} onChange={(e) => {setInputText(e.target.value)}} type="text" />
            <button onClick={clicou}>Mudar</button>
        </div>
    )
}

export default Titulo
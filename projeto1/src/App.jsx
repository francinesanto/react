import Titulo from "./Titulo"
function App(){
  return (
    <div>
      <Titulo cor="red" nome="Dimitri" paragrafo={true} />
      <Titulo cor="purple" />
    </div>
  )
}

export default App
import EstiloGlobal, { Container } from './styles'
import BarraLateral from './Containers/BarraLateral'
import ListaDeTarefas from './Containers/ListaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App

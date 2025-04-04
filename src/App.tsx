import EstiloGlobal, { Container } from './styles'
import BarraLateral from './Containers/BarraLateral'
import ListaDeTarefas from './Containers/ListaDeTarefas'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App

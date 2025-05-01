import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../Containers/BarraLateral'
import ListaDeTarefas from '../../Containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home

import BarraLateral from '../../Containers/BarraLateral'
import Formulario from '../../Containers/Formulario'

const Cadastro = () => (
  <>
    {/* Barra lateral */}
    <BarraLateral mostrarFiltros={false} />
    <Formulario />
  </>
)

export default Cadastro

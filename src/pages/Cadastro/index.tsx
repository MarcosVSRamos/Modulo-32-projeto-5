const Cadastro = () => (
  <form>
    <input type="text" placeholder="Título" />
    <textarea placeholder="Descrição da Tarefa" />
    <input name="prioridade" type="radio" id="urgente" />
    <label htmlFor="urgente">Urgente</label>
    <input name="prioridade" type="radio" id="importante" />
    <label htmlFor="importante">Iportante</label>
    <input name="prioridade" type="radio" id="normal" />
    <label htmlFor="normal">Normal</label>
    <button type="submit">Cadastrar</button>
  </form>
)

export default Cadastro

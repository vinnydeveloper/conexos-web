
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style'

function Planos() {


  const [planosList, setPlanosList] = useState([{
    id: 1,
    nome: 'Plano 1'
  }, {
    id: 2,
    nome: 'Plano 2'
  }, {
    id: 10,
    nome: 'Plano 10'
  }])



  const addPlano = () => {
    setPlanosList([...planosList, {
      id: 1,
      nome: 'Plano 1'
    }])
  }
  return (
    <Container planosCount={planosList.length}>
      {planosList.map(plano => <Link to={`/plano/${plano.id}`}>{plano.nome}</Link>)}
      <button onClick={addPlano}>Adicionar Plano</button>
    </Container>
  )
}

export default Planos

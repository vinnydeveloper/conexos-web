import Header from "components/header"
import { useParams } from "react-router-dom"
import { Container } from "./style"
import { useState } from "react"
import ContractForm from "components/ContractForm"

function Plano() {
  const params = useParams()
  const [planosList] = useState([{
    id: 1,
    nome: 'Plano 1',
    descricao: "Esse é o plano 1"
  }, {
    id: 2,
    nome: 'Plano 2',
    descricao: "Esse é o plano 2"
  }, {
    id: 10,
    nome: 'Plano 10',
    descricao: "Esse é o plano 10"
  }])


  const plano = planosList.find(plano => plano.id === Number(params.id))




  return (
    <>
      <Header />
      <Container>
        <h1>{plano?.nome}</h1>

        <p>{plano?.descricao}</p>

        <ContractForm />

      </Container>
    </>
  )
}

export default Plano

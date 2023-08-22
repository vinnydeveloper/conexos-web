import { Input } from "components/Input";
import { Container, ContainerInput, ContainerTime, Label } from "./style";
import Select from "components/Select";
import { PrimaryButton } from "components/Button";
import React, { useEffect, useState } from "react";

import * as plansService from 'services/plansService'
import * as contractService from 'services/contractService'
import { Contract, Plan } from "services/interfaces/responses";

const initialPayload = {
  user_name: "",
  user_phone: "",
  user_identification: "",
  user_email: "",
  plan_id: "",
  scheduled_start: "",
  scheduled_end: ""
}
export default function ContractForm() {
  const [payload, setPayload] = useState<Partial<Contract>>(initialPayload)

  const [plans, setPlans] = useState<Plan[]>([])



  const setValueInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: string) => setPayload({ ...payload, [key]: event.target.value })


  const submitContract = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if (!payload.scheduled_start || !payload.scheduled_end) {
      throw new Error("scheduled_start  or scheduled_end required")
    }

    const today = new Date().toDateString()
    const newPayload = {
      ...payload,
      scheduled_start: new Date(`${today} ${payload.scheduled_start}`).toISOString(),
      scheduled_end: new Date(`${today} ${payload.scheduled_end}`).toISOString()
    }

    const response = await contractService.create(newPayload)

    if (response) {
      console.log(response)
      alert("Contrato efetuado com sucesso!")

      setPayload(initialPayload)
    }



    return
  }

  useEffect(() => {

    const promise = async (): Promise<void> => {
      const plans = await plansService.getAll()

      setPlans(plans)
    }

    void promise()

  }, [])


  return <Container>
    <h1>Contratação do plano</h1>

    <form onSubmit={submitContract}>
      <ContainerInput>
        <Label>Nome Completo</Label>
        <Input required type="text" value={payload.user_name} onChange={(event) => setValueInput(event, 'user_name')} />
      </ContainerInput>

      <ContainerInput>
        <Label>CPF</Label>
        <Input required type="text" minLength={11} maxLength={11} value={payload.user_identification} onChange={(event) => setValueInput(event, 'user_identification')} />
      </ContainerInput>
      <ContainerInput>
        <Label>Telefone para contato</Label>
        <Input required type="tel" value={payload.user_phone} onChange={(event) => setValueInput(event, 'user_phone')} />
      </ContainerInput>

      <ContainerInput>
        <Label>Email</Label>
        <Input required type="email" value={payload.user_email} onChange={(event) => setValueInput(event, 'user_email')} />
      </ContainerInput>

      <ContainerInput>
        <Label>Planos</Label>
        <Select required onChange={(event) => setValueInput(event, 'plan_id')}>
          <option disabled>Escolha seu plano</option>
          {plans.length > 0 && plans.map(plan => (<option value={plan._id}>{plan.name}</option>))}
        </Select>
      </ContainerInput>


      <ContainerInput>
        <Label>Horario de Visita</Label>
        <ContainerTime>
          <Label>De</Label>
          <Input required type="time" value={payload.scheduled_start} onChange={(event) => setValueInput(event, 'scheduled_start')} />
          <Label>Até</Label>
          <Input required type="time" value={payload.scheduled_end} onChange={(event) => setValueInput(event, 'scheduled_end')} />
        </ContainerTime>

      </ContainerInput>

      <ContainerInput>
        <PrimaryButton type="submit">Contratar</PrimaryButton>
      </ContainerInput>

    </form>

  </Container>
}
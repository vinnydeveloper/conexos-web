import coreApi from "./axios";
import { Contract } from "./interfaces/responses";



async function create(payload: Partial<Contract>): Promise<Contract> {
  try {

    const response = await coreApi.post('/contracts', payload)

    return response.data as Contract

  } catch (error) {
    throw error
  }
}

export {
  create
}
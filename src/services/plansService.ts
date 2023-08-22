import coreApi from "./axios";
import { Plan } from "./interfaces/responses";



async function getAll(): Promise<Plan[]> {
  try {

    const response = await coreApi.get('/plans')

    return response.data as Plan[]

  } catch (error) {
    throw error
  }
}

export {
  getAll
}
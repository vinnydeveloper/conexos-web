export interface Plan {

  benefits: string[]
  created_at: string
  description: string
  name: string
  price: number
  updated_at: string
  _id: string
}

export interface Contract {
  _id: string,
  user_name: string,
  user_identification: string,
  user_phone: string,
  user_email: string,
  plan: Plan,
  plan_id?: string,
  scheduled_start: string,
  scheduled_end: string,
  created_at: string,
  updated_at: string,
}
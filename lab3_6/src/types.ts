export interface Event {
  id: number
  name: string
  email: string
}

export interface EventState {
  event: Event | null
}
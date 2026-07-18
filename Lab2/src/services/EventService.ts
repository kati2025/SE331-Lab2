import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/kati2025/331/events',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    },
    getEvent(id: number) {
    return apiClient.get('/events/' + id)
    }
}
// 2.2 https://my-json-server.typicode.com/kati2025/331/events?_limit=2&_page=1
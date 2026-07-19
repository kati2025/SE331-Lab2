import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/kati2025/331',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(perPage: number, page: number) {
        return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
    },
    getEvent(id: number) {
    return apiClient.get('/events/' + id)
    }
}
// 2.2 https://my-json-server.typicode.com/kati2025/331/events?_limit=2&_page=1
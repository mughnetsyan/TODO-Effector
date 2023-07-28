
const baseUrl = 'http://localhost:8000/api'

export const getRequestPath = (url: string) => {
    return [baseUrl, url].join('/')
}

export const LIMIT = 9
import axios from 'axios'
import { API_URL } from './../config/constants'

const API = axios.create({
  baseURL: API_URL
})

const USERS_ENDPOINT = '/users'

export default {
  users: () => API.get(USERS_ENDPOINT)
}

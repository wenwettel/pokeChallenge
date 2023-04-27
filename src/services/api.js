import axios from 'axios'
import { BASE_URL } from '../../constants'

export const pokemonApi = axios.create({
    baseURL: BASE_URL 
})
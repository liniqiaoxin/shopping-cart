/**
 * Mocking client-server processing
 */
import axios from 'axios';
const BASE_URL = "./"

export default {
  getProducts: () => axios.get(BASE_URL + 'products.json'),
  buyProducts: (payload) => new Promise((resolve) => setTimeout(() => resolve(payload), 2000)),
};

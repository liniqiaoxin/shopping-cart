/**
 * Mocking client-server processing
 */
import axios from 'axios';

export default {
  getProducts: () => axios.get('/products.json'),
  buyProducts: (payload) => new Promise((resolve) => setTimeout(() => resolve(payload), 2000)),
};

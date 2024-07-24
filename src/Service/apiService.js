// src/services/apiService.js
import axios from 'axios';
import { useMainStore } from '@/stores/mainStore';

// Create a function to get the main store instance inside each API method
function getMainStore() {
  return useMainStore();
}

// Create an instance of axios with default configuration
const apiClient = axios.create({
  baseURL: '', // We'll set this dynamically
  withCredentials: false, // Set to true if your API requires credentials like cookies or HTTP auth
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Export your API methods
export default {
  async getInfo() {
    const mainStore = getMainStore(); // Get the store instance
    const selectedLang = mainStore.selectedLang;
    const email = mainStore.email;
    
    // Set the baseURL dynamically based on the store
    apiClient.defaults.baseURL = mainStore.ApiUrl;

    try {
      const response = await apiClient.get(`/portfolio/info/${email}`, {
        params: { lang: selectedLang },
      });
      return response.data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },

  // You can add more methods here
  // async createProduct(data) { ... }
  // async updateProduct(id, data) { ... }
  // async deleteProduct(id) { ... }
};

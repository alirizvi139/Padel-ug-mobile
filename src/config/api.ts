// API Configuration
// export const API_CONFIG = {
//   BASE_URL: 'http://localhost:8000/api/',
//   ENDPOINTS: {
//     USERS: `${API_CONFIG.BASE_URL}users/`,
//   },
// } 
const BASE_URL = 'http://localhost:8000/api/';
const ENDPOINTS = {
  users: {
    get: `${BASE_URL}users/`,
  },
}

export { BASE_URL, ENDPOINTS };
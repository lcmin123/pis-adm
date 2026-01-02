const API_BASE = '/api';

const ENDPOINTS = {
  USERS: {
    LIST: `${API_BASE}/users`,
    CREATE: `${API_BASE}/users`,
    DETAIL: `${API_BASE}/users/:id`,
  },
};

export { API_BASE, ENDPOINTS };

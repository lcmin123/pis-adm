const API_BASE = '/api';

const ENDPOINTS = {
  USERS: {
    ROOT: `${API_BASE}/users`,
    DETAIL: (id) => `${API_BASE}/users/${id}`,
    ATH_NO: (id, ath_no) => `${API_BASE}/users/${id}/${ath_no}`,
  },
};

export { API_BASE, ENDPOINTS };

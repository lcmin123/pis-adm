const API_BASE = '/api';

const ROUTES = {
  USERS: {
    ROOT: `${API_BASE}/users`,
    DETAIL: `${API_BASE}/users/:id`,
    ATH_NO: `${API_BASE}/users/:id/:ath_no`,
  },
};

const ENDPOINTS = {
  USERS: {
    ROOT: ROUTES.USERS.ROOT,
    DETAIL: (id) => ROUTES.USERS.DETAIL.replace(':id', id),
    ATH_NO: (id, ath_no) => ROUTES.USERS.ATH_NO.replace(':id', id).replace(':ath_no', ath_no),
  },
};

export { API_BASE, ENDPOINTS, ROUTES };

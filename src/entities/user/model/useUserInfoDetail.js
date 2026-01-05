import { apiClient } from '@src/shared/api';
import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const useUserInfoDetail = (id) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: async () => {
      const res = await apiClient.get(`${API_BASE_URL}/api/users/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
};

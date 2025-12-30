import { apiClient } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const useUserDetail = (userId) => {
  return useQuery({
    queryKey: ['users', userId],
    queryFn: async () => {
      const res = await apiClient.get(`${API_BASE_URL}/api/users/${userId}`);
      return res.data;
    },
    enabled: !!userId,
  });
};

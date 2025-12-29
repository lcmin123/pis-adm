import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@shared';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const fetchUsers = async () => {
  const res = await apiClient.get(`${API_BASE_URL}/api/users`);
  if (res.status !== 200) {
    throw new Error('Failed to get users');
  }
  return res.data;
};

export const useUserList = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    refetchOnWindowFocus: false,
  });
};

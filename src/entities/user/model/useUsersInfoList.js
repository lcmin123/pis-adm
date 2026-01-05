import { ENDPOINTS } from '@shared/api/endpoint';
import { apiClient } from '@src/shared/api';
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const res = await apiClient.get(ENDPOINTS.USERS.ROOT);
  if (res.status !== 200) {
    throw new Error('Failed to get users');
  }
  return res.data;
};

export const useUsersInfoList = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    refetchOnWindowFocus: false,
  });
};

import { ENDPOINTS } from '@shared/api/endpoint';
import { apiClient } from '@src/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useUserInfoDetail = (id) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: async () => {
      const res = await apiClient.get(ENDPOINTS.USERS.DETAIL(id));
      return res.data;
    },
    enabled: !!id,
  });
};

import { apiClient } from '@shared/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export function GenerateAthNoButton({ user }) {
  const queryClient = useQueryClient();

  const createAthNo = async () => {
    const athNo = user.birth + '-' + user.id;
    await apiClient.put(`${API_BASE_URL}/api/users/${user.id}`, { ath_no: athNo });
  };

  const mutation = useMutation({
    mutationFn: createAthNo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users', user.id] });
    },
  });

  if (user.ath_no) {
    return <p>체육인 번호가 생성되었습니다.</p>;
  }

  return <button onClick={() => mutation.mutate()}>체육인 번호 생성</button>;
}

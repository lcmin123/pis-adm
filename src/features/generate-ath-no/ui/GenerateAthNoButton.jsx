import { ENDPOINTS } from '@shared/api/endpoint';
import { apiClient } from '@src/shared/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function GenerateAthNoButton({ user }) {
  const queryClient = useQueryClient();

  const createAthNo = async () => {
    const ath_no = user.birth + '-' + user.id;
    await apiClient.patch(ENDPOINTS.USERS.ATH_NO(user.id, ath_no));
  };

  const mutation = useMutation({
    mutationFn: createAthNo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users', user.id] });
    },
    onError: (error) => {
      alert(error.response?.data?.error || '체육인 번호 생성에 실패했습니다.');
    },
  });

  if (user.ath_no) {
    return <p>체육인 번호가 생성되었습니다.</p>;
  }

  return <button onClick={() => mutation.mutate()}>체육인 번호 생성</button>;
}

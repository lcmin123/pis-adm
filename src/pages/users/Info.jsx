import { apiClient } from '@shared/api/axiosInstance';
import { useMutation as useMutationStack, useQueryClient, useQuery as useQueryStack } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';

export const Route = createFileRoute('/users/Info')({
  component: UsersPage,
});

function UsersPage() {
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // ... (rest of the logic remains, just removing Header wrapper)
  // Re-implementing simplified render

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const fetchUsers = async () => {
    const res = await apiClient.get(`${API_BASE_URL}/api/users`);
    if (res.status !== 200) {
      throw new Error('Failed to get users');
    }
    return res.data;
  };

  const {
    data: users,
    isLoading,
    error,
  } = useQueryStack({
    queryKey: ['users'],
    queryFn: fetchUsers,
    refetchOnWindowFocus: false,
  });

  const createUserId = () => {
    const intAscii1 = Math.floor(Math.random() * 26) + 65;
    const intAscii2 = Math.floor(Math.random() * 26) + 65;
    const char = String.fromCharCode(intAscii1) + String.fromCharCode(intAscii2);
    const randomNum = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    return char + randomNum;
  };

  const addUser = async (data) => {
    await apiClient.post(`${API_BASE_URL}/api/users`, { ...data, id: data.sex + createUserId() });
  };

  const mutation = useMutationStack({
    mutationFn: addUser,
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('name', { required: '이름은 필수입니다.' })} placeholder="이름 입력" />
          <span style={{ color: 'red', fontSize: '12px', marginLeft: 5 }}>{errors.name?.message}</span>
        </div>

        <div style={{ marginTop: 5 }}>
          <input {...register('birth', { required: '생년월일을 입력해주세요.' })} placeholder="생년월일 입력" />
          <span style={{ color: 'red', fontSize: '12px', marginLeft: 5 }}>{errors.birth?.message}</span>
        </div>

        <div style={{ marginTop: 5 }}>
          <select
            {...register('sex', { required: '성별을 선택해주세요.' })}
            defaultValue="" // 초기값 설정
          >
            <option value="" disabled>
              성별 선택
            </option>
            <option value="1">남성</option>
            <option value="2">여성</option>
          </select>
          <span style={{ color: 'red', fontSize: '12px', marginLeft: 5 }}>{errors.sex?.message}</span>
        </div>

        <button type="submit" style={{ marginTop: 10 }}>
          추가
        </button>
      </form>

      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {users && (
        <ul>
          {users.map((u) => (
            <li key={u.id} onClick={() => navigate({ to: '/users/InfoDetail/$id', params: { id: u.id } })}>
              {u.id} {u.name} {u.birth} {u.sex === 1 ? '남성' : '여성'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

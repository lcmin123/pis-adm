import { apiClient } from '@shared/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

const API_BASE_URL = import.meta.env.VITE_API_URL;

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

export function CreateUserForm() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      reset();
      alert('등록되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: () => {
      alert('등록에 실패했습니다.');
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
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
        <select {...register('sex', { required: '성별을 선택해주세요.' })} defaultValue="">
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
  );
}

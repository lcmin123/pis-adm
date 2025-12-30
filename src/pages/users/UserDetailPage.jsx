import { Header } from '@/widgets';
import { UserCard, useUserDetail } from '@entities/user';
import { GenerateAthNoButton } from '@features/generate-ath-no';
import { useParams } from '@tanstack/react-router';

export default function UserDetailPage() {
  const { id } = useParams({ from: '/userInfo/$id' });
  const { data: user, isLoading, error } = useUserDetail(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Header />
      <div style={{ padding: 20 }}>
        <h1>User Detail</h1>
        <UserCard user={user} actionSlot={<GenerateAthNoButton user={user} />} />
      </div>
    </>
  );
}

import { UserCard, useUserDetail } from '@entities/user';
import { GenerateAthNoButton } from '@features/generate-ath-no';
import { useParams } from '@tanstack/react-router';

export default function UserDetailPage() {
  const { userId } = useParams({ strict: false });
  const { data: user, isLoading, error } = useUserDetail(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
        <UserCard user={user} actionSlot={<GenerateAthNoButton user={user} />} />
    </>
  );
}

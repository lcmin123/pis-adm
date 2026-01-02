import { UserCard, useUserInfoDetail } from '@entities/user';
import { GenerateAthNoButton } from '@features/generate-ath-no';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/regi/infoDetail/$id')({
  component: UserInfoDetailPage,
});

function UserInfoDetailPage() {
  const { id } = Route.useParams();
  const { data: user, isLoading, error } = useUserInfoDetail(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ padding: 20 }}>
      <UserCard user={user} actionSlot={<GenerateAthNoButton user={user} />} />
    </div>
  );
}

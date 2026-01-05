import { UserTable, useUsersInfoList } from '@src/entities/user';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/users/regi/info')({
  component: UsersPage,
});

function UsersPage() {
  const navigate = useNavigate();

  const { data: users, isLoading, error } = useUsersInfoList();

  return (
    <div>
      <button onClick={() => navigate({ to: '/users/regi/create' })} className="bg-turquoise-500 p-2 text-white">
        직접등록
      </button>

      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {users && (
        <UserTable
          data={users}
          onRowClick={(user) => navigate({ to: '/users/regi/infoDetail/$id', params: { id: user.id } })}
        />
      )}
    </div>
  );
}

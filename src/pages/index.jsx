import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate({ to: '/users' })}>경기인관리시스템</button>
    </div>
  );
}

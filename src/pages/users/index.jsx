import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/')({
  component: UsersIndexPage,
});

function UsersIndexPage() {
  return (
    <div>
      <h1>홈</h1>
    </div>
  );
}

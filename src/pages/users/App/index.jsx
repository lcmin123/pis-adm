import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/app/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <h1>신청관리</h1>;
}

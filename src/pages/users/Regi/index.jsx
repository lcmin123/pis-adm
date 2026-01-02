import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/regi/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <h1>등록관리</h1>;
}

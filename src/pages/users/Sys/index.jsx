import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/sys/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <h1>시스템관리</h1>;
}

import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/users/regi')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}

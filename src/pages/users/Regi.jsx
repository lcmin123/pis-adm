import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/Users/Regi')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}

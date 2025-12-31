import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/Users/Regi/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <h1>등록관리</h1>;
}

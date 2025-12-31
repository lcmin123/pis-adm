import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/Users/App/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <h1>신청관리</h1>;
}

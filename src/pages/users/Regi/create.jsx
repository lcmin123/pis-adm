import { CreateUserForm } from '@src/features/create-user';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/regi/create')({
  component: RouteComponent,
});

function RouteComponent() {
  return <CreateUserForm />;
}

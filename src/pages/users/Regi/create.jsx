import { CreateUserForm } from '@src/features/create-user';
import { UploadImageForm } from '@src/features/upload-img';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/regi/create')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <CreateUserForm />
      <UploadImageForm />
    </>
  );
}

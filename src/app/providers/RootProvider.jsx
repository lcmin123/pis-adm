import { RouterProvider } from '@tanstack/react-router';
import { router } from '../router';
import TanstackQueryProvider from './TanstackQueryProvider';

const RootProvider = () => {
  return (
    <TanstackQueryProvider>
      <RouterProvider router={router} />
    </TanstackQueryProvider>
  );
};

export default RootProvider;

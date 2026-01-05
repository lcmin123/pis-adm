import RootProvider from '@src/app/providers/RootProvider';
import '@src/shared/styles/global.css';
import '@src/shared/styles/normalize.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootProvider />
  </StrictMode>,
);

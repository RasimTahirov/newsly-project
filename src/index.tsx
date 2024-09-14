// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Main from './app/layouts/Main/Main';

import './styles/index.scss';
import './styles/reset.scss';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Main />
  // </StrictMode>
);

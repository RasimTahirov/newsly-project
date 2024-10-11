// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Main from './app/layouts/Main/Main';

import './styles/index.scss';
import './styles/reset.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Main />
    </Provider>
  </BrowserRouter>
  // </StrictMode>
);

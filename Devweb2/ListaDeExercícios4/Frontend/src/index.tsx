import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import ClientePage from './pages/clientePage';
import Roteador from './router/roteador';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Roteador/>
  </React.StrictMode>
);

reportWebVitals();

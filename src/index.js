import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'App';
import 'shared/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

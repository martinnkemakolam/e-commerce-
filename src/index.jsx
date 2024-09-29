import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import './index.css';
// import { store } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';

// Dynamically load Material Icons
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
link.rel = 'stylesheet';
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Provider store={store}>
      <App />
    // </Provider>
);

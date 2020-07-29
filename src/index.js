// serviceWorker.unregister();
import React from 'react';
import dva from 'dva';
// import createLoading from 'dva-loading';
import App from './App';
// import products from './models/products';
import cart from './models/cart';

const app = dva();
app.model(require('./models/products').default);
app.model(cart);
// app.use(createLoading());
app.router(() => <App />);
app.start('#root');

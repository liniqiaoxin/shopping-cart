// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import dva from 'dva';
// import createLoading from 'dva-loading';
import App from './App';
// import products from './models/products';
// import cart from './models/cart';

const app = dva();
app.model(require('./models/products').default);
// app.model(cart);
// app.use(createLoading());
app.router(() => <App />);
app.start('#root');

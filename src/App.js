// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from 'react';
import './App.css';
import ProductList from './components/products/index'
import Cart from './components/cart/index'
import SelectSize from './components/filter/selectSize/index'
import Sort from './components/filter/sort/index'
import 'antd/dist/antd.css';

class App extends React.Component {
    render() {
        return (

            <div>

                <div className="App">

                    <div className="product">
                        <div className="filter">
                            <SelectSize />
                            <Sort />
                        </div>

                        <ProductList />
                    </div>

                    <div className="cartLayout">
                        <Cart />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

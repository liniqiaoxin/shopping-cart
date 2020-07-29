import React from 'react';
import { connect } from 'dva';
import Cards from './card.js';
import './index.css';
// import Card from '../cart/index'

class ProductList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/initialData',

    });
  }

  render() {
    const { products } = this.props;
    const productList = (products.sortData.length === 0 ? products.resData : products.sortData).map((item) =>
    // const productList = products.resData.map(item => {
      <Cards data={item} key={item.id} />);
    return (

      <div>
        <div className="productList">
          {productList}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(ProductList);

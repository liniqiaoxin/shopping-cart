import React from 'react'
import Cards from './card/index.js'
import { connect } from 'dva'
import './index.css'
// import Card from '../cart/index'

class ProductList extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch({
            type: 'products/initialData',

        })
    }
    render() {
        const { products } = this.props;
        const productList = (products.sortData.length === 0 ? products.resData : products.sortData).map(item => {
        // const productList = products.resData.map(item => {
            return <Cards data={item} key={item.id} />
        })
        return (

            <div>
                <div className="productList">
                    {productList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(ProductList);
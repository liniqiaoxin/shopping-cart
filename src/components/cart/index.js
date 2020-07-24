import React from 'react';
import { connect } from 'dva'

import { Drawer, Button, Empty, Card, Row, Col } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './index.css'
import {
  ShoppingCartOutlined
} from '@ant-design/icons';


class Cart extends React.Component {
  state = { visible: false };
  componentDidMount() {
    console.log("存了没", window.localStorage, this.props.cart.cartData)
    const { dispatch } = this.props
    dispatch({
      type: 'cart/getStorage',

    })
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };



  render() {
    const { placement, visible } = this.state;
    const { cart } = this.props;

    // console.log('-----cart', cart.cartData)
    // // console.log('-----sunPrice', products.resData)
    return (
      <>
        <Button type="primary" onClick={this.showDrawer} size={"large"} icon={<ShoppingCartOutlined />}>

          Your cart
                </Button>
        <Drawer
          title="Your cart"
          placement="right"
          onClose={this.onClose}
          visible={visible}
          key={placement}
          width={720}
        >


          {
            cart.cartData.length !== 0 ?
              cart.cartData.map(item => {
                return (

                  <Card key={item.id + item.size} >

                    <Row>
                      <Col span={6}>
                        <img alt='' src={require(`../../assets/images/${item.sku}_1.jpg`)} className="img" />
                      </Col>
                      <Col span={10}>
                        <div className="clo2">
                          <h4>{item.title}</h4>
                          <p> {item.size}  {item.style} </p>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className="numbtn">
                          <Button type="link" icon={<MinusOutlined />} />

                          <div style={{alignItems: 'center'}}> {item.num} </div>

                          <Button type="link" icon={<PlusOutlined />} />
                        </div>
                      </Col>
                      <Col span={2}>
                        {/* <div className="col4"> */}
                          <h4 style={{marginTop: 5, color: 'red'}}>{item.currencyFormat}{item.price}</h4>
                        {/* </div> */}
                      </Col>
                    </Row>



                  </Card>


                )
              }) : <Empty />

          }
        </Drawer>
      </>
    );
  }
}



const mapStateToProps = state => state
export default connect(mapStateToProps)(Cart);
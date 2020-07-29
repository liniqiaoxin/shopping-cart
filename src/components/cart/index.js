import React from 'react';
import { connect } from 'dva';

import {
  Drawer, Button, Empty, Card, Row, Col, Modal, Badge, Spin,
} from 'antd';
import {
  MinusOutlined, PlusOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import './index.css';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      loading: false,

    };
  }

  componentDidMount() {

    // console.log("===", window.localStorage, this.props.cart.cartData)
    const { dispatch } = this.props;
    dispatch({
      type: 'cart/getStorage',
    })
    this.setState({
      loading: false
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

  changeNumAdd = (cartProductId, cartProductSize) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'cart/changeNumAdd',
      payload: {
        cartProductId,
        cartProductSize,
      },
    });
    dispatch({
      type: 'cart/setStorage',
    });
  }

  changeNumCut = (cartProductId, cartProductSize) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'cart/changeNumCut',
      payload: {
        cartProductId,
        cartProductSize,
      },
    });
    dispatch({
      type: 'cart/setStorage',
    });
  }

  removeProduct = (cartProductId, cartProductSize) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'cart/removeProduct',
      payload: {
        cartProductId,
        cartProductSize,
      },
    });
    dispatch({
      type: 'cart/setStorage',
    });
  }

  checkout = (checkProduct) => {
    const { dispatch } = this.props;
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      dispatch({
        type: 'cart/checkout',
        payload: {
          payload: {
            checkProduct,
          },
        },
      });
      dispatch({
        type: 'cart/setStorage',
      });
      this.setState({
        loading: false,
        visible: false,
      });
      Modal.success({
        content: 'payment successful',
        okText: 'Buy Again',
      });
    }, 1000);
  }

  render() {
    const { visible, loading } = this.state;
    const { cart } = this.props;
    // console.log('-----cart', cart.numProduct)
    const footer = (
      <div>
        <div className="foot">
          <h3>SUBTOTAL</h3>
          <p style={{ color: 'red', fontSize: '18px' }}>$ {cart.sunPrice ? cart.sunPrice.toFixed(2) : ''}</p>
        </div>
        <Spin spinning={loading} delay={100}>
          <Button
            type="link"
            onClick={() => this.checkout(cart.cartData)}
            disabled={cart.cartData.length === 0 || loading === true ? true : ''}
            style={{
              padding: 0, fontSize: '22px', width: '100%', textAlign: 'center', background: '#ffccc7', height: '40px',
            }}
          >去结算
          </Button>
        </Spin>

      </div>
    );
    // // console.log('-----sunPrice', products.resData)
    return (
      <>
        <Badge count={cart.numProduct}>
          <Button type="primary" onClick={this.showDrawer} size="large" icon={<ShoppingCartOutlined />}>
            Your cart
          </Button>
        </Badge>

        <Drawer
          title="Your cart"
          placement="right"
          onClose={this.onClose}
          visible={visible}
          // key={placement}
          width={520}
          footer={footer}
          footerStyle={{ background: '#fff1f0', padding: '20px' }}
        >

          {
            cart.cartData.length !== 0
              ? cart.cartData.map((item) => (
                // <Spin spinning={this.state.loading} delay={50}>
                <Card key={item.id + item.size}>

                  <Row>
                    <Col span={6}>
                      <img alt="" src={require(`../../assets/images/${item.sku}_1.jpg`)} className="img" />
                    </Col>
                    <Col span={10}>
                      <div className="clo2">
                        <h4>{item.title}</h4>
                        <p> {item.size}  {item.style} </p>
                        <Button type="link" onClick={() => this.removeProduct(item.id, item.size)} style={{ padding: 0 }}>remove</Button>
                      </div>
                    </Col>
                    <Col span={5}>
                      <div className="numbtn">
                        <Button type="link" onClick={() => this.changeNumCut(item.id, item.size)} icon={<MinusOutlined />} />

                        <div style={{ alignItems: 'center' }}> {item.num} </div>

                        <Button type="link" onClick={() => this.changeNumAdd(item.id, item.size)} icon={<PlusOutlined />} />
                      </div>
                    </Col>
                    <Col span={3}>
                      {/* <div className="col4"> */}
                      <h4 style={{ marginTop: 5, color: 'red' }}>{item.currencyFormat}{item.productPrice ? item.productPrice.toFixed(2) : item.price.toFixed(2)}</h4>

                      {/* </div> */}
                    </Col>
                  </Row>

                </Card>
                // </Spin>

              )) : <Empty />

          }

        </Drawer>

      </>
    );
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Cart);

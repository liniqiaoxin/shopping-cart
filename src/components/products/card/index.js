import React from 'react'
import { connect } from 'dva'
import { Card, Button, Popover, List } from 'antd';
import './card.css'
// const { Meta } = Card;

class Cards extends React.Component {
 
  render() {
    const { data } = this.props
    // console.log('----', data)
    return (
      <div className="card">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt='' src={require(`../../../assets/images/${data.sku}_1.jpg`)} />}
        >
          <div className="title">
            <h4>{data.title}</h4>
          </div>

          <hr className="hrColor"></hr>
          <h2>${data.price.toFixed(2)}</h2>
          <p> or {data.installments} x {(data.price / data.installments).toFixed(2)}</p>
          <Popover

            title="select the size"
            trigger="click"

            content={
              <List
                size="large"
                dataSource={data.availableSizes}
                renderItem={_item => 
                <List.Item>
                  <Button type="link" onClick={() => this.addToCart(data.id, _item)} block>{_item}</Button>
                </List.Item>}
              />
            }
          >
            <Button type="primary">Add To Cart</Button>
          </Popover>

          {/* <Button type="primary" onClick={() => this.props.addProduct(Cards)}>Add To Cart</Button> */}
        </Card>

      </div>
    )

  }
}


const mapStateToProps = state => state
export default connect(mapStateToProps)(Cards);
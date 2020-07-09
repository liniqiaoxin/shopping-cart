import React from 'react';
// import { connect } from 'dva'

import { Drawer, Button, Empty } from 'antd';
import './index.css'
import {
    ShoppingCartOutlined
} from '@ant-design/icons';


class Cart extends React.Component {
    state = { visible: false };

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
        return (
            <>
                <Button type="primary" onClick={this.showDrawer}  size={"large"} icon={<ShoppingCartOutlined />}>
                  
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
                    <Empty />
                </Drawer>
            </>
        );
    }
}


export default Cart;



// import React, {Component} from 'react';
// import { connect } from 'dva';
// import { Modal, InputNumber, Checkbox, icon } from 'antd';
// import styles from './index.css';

// class Cart extends Component {

// //   constructor(props){
// //     super(props);

// //     this.state = {
// //       counts: props.product.counts,
// //       checked: props.product.checked === undefined ? false : props.product.checked
// //     }
// //   }

// //   isSelected = (id) => {
// //     this.setState((state) => ({
// //       checked: !state.checked
// //     }));
// //     this.props.selectProduct(id);
// //     this.props.calTotal();
// //   }

// //   dealWithMoney = (price) => {
// //     return '$' + (price.toFixed(2));
// //   }

// //   showConfirm = () => {
// //     const {product} = this.props;
// //     Modal.confirm({
// //       title: 'Do you want to delete this product?',
// //       onOk: () => {
// //         this.props.removeProduct(product.id);
// //         this.props.calTotal();
// //       },
// //       onCancel: () => {
// //         this.props.updateProduct(product.id, 1);
// //         this.setState({
// //           counts: 1
// //         });
// //       },
// //     });
// //   }

// //   onCountsChange = (value) => {
// //     if(!value && value !== 0){
// //       value = 1;
// //     }
// //     const {product} = this.props;
// //     if(value === 0){
// //       this.showConfirm();
// //       return;
// //     }
// //     this.props.updateProduct(product.id, value);
// //     this.setState({
// //       counts: value
// //     });
// //     this.props.calTotal();
// //   }

// //   remove = () => {
// //     const {product} = this.props;
// //     Modal.confirm({
// //       title: 'Do you want to delete this product?',
// //       onOk: () => {
// //         this.props.removeProduct(product.id);
// //         this.props.calTotal();
// //       },
// //       onCancel: () => {

// //       }
// //     });
// //   }

//   render(){
//     // const {product} = this.props;
//     // const {counts, checked} = this.state;

//     return (
//       <div className={styles.container}>
//         {/* <h4 className={styles.title}><span>{product.title}</span><p className={styles.operation}><span>{this.dealWithMoney(product.price)}</span><icon type="close" onClick={() => this.remove()} className={styles.icon}/></p></h4>
//         <div className={styles.content}>
//           <div className={styles.check}>
//             <Checkbox onClick={() => this.isSelected(product.id)} checked={checked} />
//           </div>
//           <div className={`${styles['item-box']} ${styles.image}`}>
//             <img src={product.smallImage} style={{width: '50px', height: '60px', cursor: 'pointer'}} alt=""/>
//           </div>
//           <div className={`${styles['item-box']} ${styles.info}`}>{product.style}</div>
//           <div className={`${styles['item-box']} ${styles.amount}`}>
//             <InputNumber style={{width: '50px'}} size="small" min={0} max={50} onChange={this.onCountsChange} value={counts}/>
//           </div>
//           <div className={`${styles['item-box']} ${styles.sum}`}><strong className={styles.strong}>{this.dealWithMoney(counts * product.price)}</strong></div>
//         </div> */}
//       </div>
//     )
//   }
// };

// const mapDispatchToProps = (dispatch)=>{
// //   return {
// //     updateProduct(id, counts){
// //       dispatch({ type: 'carts/updateCart', payload: {id, counts}});
// //     },
// //     removeProduct(id){
// //       dispatch({ type: 'carts/removeCart', payload: {id}});
// //     },
// //     selectProduct(id){
// //       dispatch({ type: 'carts/isSelectCart', payload: {id}});
// //     }
// //   }
// };

// export default connect(null, mapDispatchToProps)(Cart);

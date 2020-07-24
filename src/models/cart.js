import { List } from "antd/lib/form/Form";


export default {

  namespace: 'cart',

  state: {
    sunPrice: 0,
    numProduct: 0,
    cartData: [],
    // Lists: [],
    sizeList: []
  },

  effects: {


    *addToCart({ payload }, { put }) {
     
      yield put({
        type: "CartList",
        // payload: { cartLists, List,sizelist }
        payload: payload
      });

    },


    *setStorage(_, { select, put }) {
      const stateArr = yield select(state => state)
      console.log("-------===", stateArr)
      let { cartData, sizeList } = stateArr.cart;
      let data = JSON.stringify(cartData)
      let sdata = JSON.stringify(sizeList)
      // let size = JSON.stringify(Lists)
      window.localStorage.setItem('cart', data);
      window.localStorage.setItem('size', sdata);
      // window.localStorage.setItem('size', size);
      // console.log('===win', window.localStorage.cart)
      // console.log('===si', window.localStorage.size)
      // console.log('===size',window.localStorage.size)
      yield put({
        type: "SetStorage",
        payload: {
          data: JSON.parse(window.localStorage.cart),
          sizelist: [...JSON.parse(window.localStorage.size)],
          // size: JSON.parse(window.localStorage.size),

        }
      });
    },
    *getStorage({ payload }, { put }) {
      console.log('===payload', payload)
      //刚开始从localStorage拿值
      yield put({
        type: "SetStorage",
        payload: {
          data: window.localStorage.cart ? JSON.parse(window.localStorage.cart) : [],
          sizelist: window.localStorage.size ? [...JSON.parse(window.localStorage.size)] : [],
        }
      });

    },



    // *addToCart({ payload: currentSize }, { put }) {
    //   // const { currentSize } = payload;
    //   let cartLists = []
    //   console.log('------------currentSize', currentSize)
    //   cartLists = currentSize
    //   yield put({
    //     type: "CartList",
    //     payload: { cartLists }
    //   });

    // },

    // *setStorage(_, { select, put }) {
    //   const stateArr = yield select(state => state)
    //   console.log("-------===", stateArr)
    //   let { cartData } = stateArr.cart;
    //   let data = JSON.stringify(cartData)
    //   window.localStorage.setItem('cart', data);
    //   console.log('===win',window.localStorage.cart)

    //   yield put({
    //     type: "SetStorage",
    //     payload: {
    //       data: JSON.parse(window.localStorage.cart),
    //     }
    //   });
    // },
    // *getStorage({ payload }, { put }) {
    //   console.log('===payload',payload)
    //   //刚开始从localStorage拿值
    //   yield put({
    //     type: "SetStorage",
    //     payload: {
    //       data: window.localStorage.cart ? JSON.parse(window.localStorage.cart) : [],
    //        }
    //   });

    // },


  },

  reducers: {
    CartList: (state, { payload }) => {
      const { currentItem, currentSize } = payload
      // const stateArr = yield select(state => state)
      //   console.log("-------===", stateArr)
      //   let { resData } = stateArr.products;
      // let Lists = []
      // Lists = sizelist
      console.log("==lidt==",currentItem, currentSize,)
      const { cartData } = state
        let total = 0;
      let numProduct = 0
      let sunPrice = 0
    
        cartData.forEach(item => {
          
          if (item.id === currentItem.id && item.size === currentSize) {
            item.num += 1;
          }
          else {
            total ++
          }
          numProduct += item.num
        })
        if (cartData.length === total ) {
          cartData.push({
            // id:currentItem,
            ...currentItem,
            size:currentSize,
         
            // cartData,
            num: 1
          })
       
    
      numProduct += 1
    }
    console.log("当前购物车数据", cartData,"当前购物车shul",numProduct,total);
    cartData.forEach(item => {
      sunPrice = sunPrice + item.price * item.num
    })
    console.log("price", sunPrice);
  
    // console.log('------------currentSize', cartLists)
    return {
      ...state,
      cartData,
      numProduct
      // sizeList: sizelist
      // sizeList: [...sizelist]
    };
    },
   
    SetStorage: (state, { payload:{data} }) => {
       
      // const { data,size } = payload;
      console.log('===data', data)
      return {
        ...state,
        cartData: data,
        // Lists: size
        // sizeList: [...sizelist]
      }

      
    },
  }
};

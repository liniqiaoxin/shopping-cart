export default {

  namespace: 'cart',

  state: {
    sunPrice: 0,
    numProduct: 0,
    cartData: [],
    // Lists: [],
    sizeList: [],
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
      // console.log("-------===", stateArr)
      // let { cartData, sizeList } = stateArr.cart;
      let { cartData, sunPrice, numProduct } = stateArr.cart;
      let data = JSON.stringify(cartData)
      let _sunPrice = JSON.stringify(sunPrice)
      let _numProduct = JSON.stringify(numProduct)
      // let size = JSON.stringify(Lists)
      window.localStorage.setItem('cart', data);
      window.localStorage.setItem('_sunPrice', _sunPrice);
      window.localStorage.setItem('_numProduct', _numProduct);
      // window.localStorage.setItem('size', size);
      // console.log('===_sunPrice', window.localStorage._sunPrice)
      // console.log('===data', data)
      // console.log('===numProduct', window.localStorage._numProduct)
      yield put({
        type: "SetStorage",
        payload: {
          data: JSON.parse(window.localStorage.cart),
          _sunPrice: JSON.parse(window.localStorage._sunPrice),
          // sizelist: [...JSON.parse(window.localStorage.size)],
          _numProduct: JSON.parse(window.localStorage._numProduct),

        }
      });
    },
    *getStorage({ payload }, { put }) {
      // console.log('===payload', payload)
      //刚开始从localStorage拿值
      yield put({
        type: "SetStorage",
        payload: {
          data: window.localStorage.cart ? JSON.parse(window.localStorage.cart) : [],
          _sunPrice: window.localStorage._sunPrice ? JSON.parse(window.localStorage._sunPrice) : '',
          _numProduct: window.localStorage._numProduct ? JSON.parse(window.localStorage._numProduct) : '',
        }
      });

    },

    *changeNumAdd({ payload }, { put }) {
      yield put({
        type: "NumAdd",
        // payload: { cartLists, List,sizelist }
        payload: payload
      });
    },

    *changeNumCut({ payload }, { put }) {
      yield put({
        type: "NumCut",
        // payload: { cartLists, List,sizelist }
        payload: payload
      });
    },

    *removeProduct({ payload }, { put }) {
      yield put({
        type: "removePro",
        // payload: { cartLists, List,sizelist }
        payload: payload
      });
    },

    *checkout({ payload }, { put }) {
      yield put({
        type: "cartCheckout",
        payload: payload
      });
    },

  },



  reducers: {
    CartList: (state, { payload }) => {
      const { currentItem, currentSize } = payload
      // console.log("==lidt==", currentItem, currentSize,)
      const { cartData } = state
      let total = 0;
      let numProduct = 0
      let sunPrice = 0

      cartData.forEach(item => {

        if (item.id === currentItem.id && item.size === currentSize) {
          item.num += 1;
          item.productPrice = item.num * item.price;
        }
        else {
          total++
        }
        numProduct += item.num
        // item.productPrice =  item.num * item.price;
      })
      if (cartData.length === total) {
        cartData.push({
          // id:currentItem,
          ...currentItem,
          size: currentSize,
          // cartData,
          num: 1,
        })


        numProduct += 1
      }
      // console.log("当前购物车数据", cartData, "当前购物车shul", numProduct, total);
      cartData.forEach(item => {
        sunPrice = sunPrice + item.price * item.num
      })
      // console.log("price", sunPrice);

      // console.log('------------currentSize', cartLists)
      return {
        ...state,
        cartData,
        sunPrice,
        numProduct,
        // sizeList: sizelist
        // sizeList: [...sizelist]
      };
    },

    SetStorage: (state, { payload: { data, _sunPrice, _numProduct } }) => {

      // const { data,size } = payload;
      // console.log('===data', data)
      return {
        ...state,
        cartData: data,
        sunPrice: _sunPrice,
        numProduct: _numProduct,
        
        // Lists: size
        // sizeList: [...sizelist]
      }
    },

    NumAdd: (state, { payload }) => {
      const { cartProductId, cartProductSize } = payload
      console.log("==NumAdd==", cartProductId, cartProductSize,)
      const { cartData } = state
      let numProduct = 0
      let sunPrice = 0
      cartData.forEach(item => {
        if (item.id === cartProductId && item.size === cartProductSize) {
          item.num++;
          item.productPrice = item.num * item.price;
        }
        numProduct += item.num
        // item.productPrice =  item.num * item.price;
      })
      cartData.forEach(item => {
        sunPrice = sunPrice + item.price * item.num
      })
      // console.log("price", sunPrice);
      // console.log("numProduct", numProduct);
      return {
        ...state,

        cartData: cartData,
        sunPrice: sunPrice,
        numProduct: numProduct,
        
      };
    },

    NumCut: (state, { payload }) => {
      const { cartProductId, cartProductSize } = payload
      console.log("==NumCut==", cartProductId, cartProductSize,)
      const { cartData } = state
      let numProduct = 0
      let sunPrice = 0
      console.log("==cartData==", cartData.size, cartProductSize,)
      cartData.forEach(item => {
        if (item.id === cartProductId && item.size === cartProductSize) {
          item.num--;
          item.productPrice = item.num * item.price;
        }
        if (item.num === 0) {
          item.num = 0;
          cartData.splice(cartData.findIndex(item => (item.id=== cartProductId && item.size === cartProductSize) ), 1)
        }
        numProduct += item.num
        // item.productPrice =  item.num * item.price;
      })
      cartData.forEach(item => {
        sunPrice = sunPrice + item.price * item.num
      })
      // console.log("price", sunPrice);
      return {
        ...state,
        cartData: cartData,
        sunPrice: sunPrice,
        numProduct: numProduct,
        
      };
    },

    removePro: (state, { payload }) => {
      const { cartProductId, cartProductSize } = payload
      // console.log("==lidt==", cartProductId, cartProductSize,)
      const { cartData } = state
      let numProduct = 0
      let sunPrice = 0
      cartData.forEach(item => {
        if (item.id === cartProductId && item.size === cartProductSize) {
          item.num = 0;
          cartData.splice(cartData.findIndex(item => item.id === cartProductId), 1)
        }
        numProduct += item.num
        // item.productPrice =  item.num * item.price;
      })
      cartData.forEach(item => {
        sunPrice = sunPrice + item.price * item.num
      })
      // console.log("remove", cartData);
      return {
        ...state,
        cartData: cartData,
        sunPrice: sunPrice,
        numProduct: numProduct,
        
      };
    },


    cartCheckout: (state, { payload }) => {
      const { checkProduct } = payload
      // console.log("==lidt==", checkProduct)
      // const { cartData } = state
      return {
        ...state,
        cartData: [],
        sunPrice: '',
        numProduct: '',
        
      };
    },

  }
};

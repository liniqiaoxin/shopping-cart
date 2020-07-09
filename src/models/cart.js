
// import getProductData from "../api/shop";

// export default {
//     namespace: 'carts',
//     state: {
//       list: [],  // 商品列表
//       cart: [],  // 购物车列表
//       counts: 0, // 购物车商品数量
//     },
//     reducers: {
//       save(state, { payload: { data: list } }) {
//         return { ...state, list };
//       },
//       getCart(state) {
//         let cart = JSON.parse(window.localStorage.getItem(STORAGE_NAME)) || [];
//         let counts = 0;
//         if (Array.isArray(cart) && cart.length) {
//           cart.forEach((item) => {
//             counts += item.counts;
//           });
//         }
//         return { ...state, cart, counts };
//       },
//       addToCart(state, { payload: { data } }) {
//         let newId = data.id;
//         let cart = [...state.cart];
//         let flag = false;
//         cart.forEach((item) => {
//           if (item.id === newId) {
//             item.counts++;
//             flag = true;
//           }
//         });
//         if (!flag) {
//           data.counts = 1;
//           cart.push(data);
//         }
//         window.localStorage.setItem(STORAGE_NAME, JSON.stringify(cart));
//         return { ...state, cart, counts: state.counts + 1 };
//       },
//       updateCart(state, { payload: { id, counts } }) {
//         let cart = [...state.cart];
//         let step;
//         cart.forEach((item) => {
//           if (item.id === id) {
//             item.counts = counts;
//             step = counts - item.counts;
//           }
//         });
//         window.localStorage.setItem(STORAGE_NAME, JSON.stringify(cart));
//         return { ...state, cart, counts: state.counts + step };
//       },
//       removeCart(state, { payload: { id } }) {
//         let cart = [...state.cart];
//         let key;
//         let counts = state.counts;
//         cart.forEach((item, index) => {
//           if (item.id === id) {
//             key = index;
//             item.checked = false;
//             counts -= item.counts;
//           }
//         });
//         cart.splice(key, 1);
//         window.localStorage.setItem(STORAGE_NAME, JSON.stringify(cart));
//         return { ...state, cart, counts };
//       },
//       removeAll(state) {
//         window.localStorage.removeItem(STORAGE_NAME);
//         return { ...state, cart: [], counts: 0 };
//       },
//       isSelectCart(state, { payload: { id } }) {
//         let cart = [...state.cart];
//         cart.forEach((item) => {
//           if (item.id === id) {
//             if (item.hasOwnProperty('checked')) {
//               item.checked = !item.checked;
//             } else {
//               item.checked = true;
//             }
//           }
//         });
//         window.localStorage.setItem(STORAGE_NAME, JSON.stringify(cart));
//         return { ...state, cart };
//       }
//     },
//     effects: {
//       *fetch({ }, { call, put }) {
//         const { data } = yield call(getProductData.fetch);
//         yield put({
//           type: 'save',
//           payload: { data: data.data },
//         });
//       },
//     },
//     // subscriptions: {
//     //   setup({ dispatch, history }) {
//     //     return history.listen(({ pathname }) => {
//     //       if (pathname === '/products') {
//     //         dispatch({ type: 'fetch' });
//     //         dispatch({ type: 'getCart' });
//     //       }
//     //     });
//     //   },
//     // },
// };


export default {
    namespace: "carts",
    state: {
        cartList: [],
        count: 0,
        sumPrice: 0,
        check: false,


    },
    effects: {
        *cart({ payload }, { select, put }) {
            const { _products } = payload;
            yield put({
                type: "handleCart",
                payload: {
                    _products
                }
            })

            yield put({
                type: "checkoutProducts",
            });

        },
        *checking({ payload }, { put }) {
            yield put({
                type: "handleCheck",
                payload: payload
            });
        },
        *setStorage({ payload }, { select, put }) {
            const storage = window.localStorage
            //从state拿到数据
            const stateArr = yield select(state => state)
            console.log(stateArr,'kkkkkk')
            let { cartList, count, sumPrice } = stateArr.cartProducts;
            let data = JSON.stringify(cartList)
            let _count = count
            let _sumPrice = sumPrice
            storage.setItem("data", data)
            storage.setItem("count", _count)
            storage.setItem("sumPrice", _sumPrice)
       
            yield put({
                type: "_setStorage",
                payload: {
                    data: JSON.parse(window.localStorage.data),
                    _count: window.localStorage.count,
                    _sumPrice: window.localStorage.sumPrice
                }
            });
        },
        *getStorage({ payload }, { put }) {
            //刚开始从localStorage拿值
            yield put({
                type: "_setStorage",
                payload: {
                    data: window.localStorage.data?JSON.parse(window.localStorage.data):[],
                    _count: window.localStorage.count?window.localStorage.count:0,
                    _sumPrice: window.localStorage.sumPrice?window.localStorage.sumPrice:0,
                }
            });
        },


        *add({ payload }, { put }) {
            const { id, quantity, size } = payload;
            yield put({
                type: "addCount",
                payload: {
                    id,
                    quantity,
                    size
                }
            })
            yield put({
                type: 'subTotal',
            })

        },
        *delete({ payload }, { put }) {
            const { id, quantity, size } = payload;
            yield put({
                type: "minusCount",
                payload: {
                    id,
                    quantity,
                    size
                }
            });
            yield put({
                type: 'subTotal',
            })
        },
        *remove({ payload }, { put }) {
            const { id, size, quantity } = payload;

            yield put({
                type: "handleRemove",
                payload: {
                    id,
                    size,
                    quantity
                }
            })

            yield put({
                type: 'subTotal',
            })
        },
        *checked({ payload }, { put }) {

            yield put({
                type: "handleChecked",
                payload: payload
            })
            yield put({
                type: "removeCart",
                // payload: payload
            })
        }
    },
    reducers: {
        handleCart: (state, { payload }) => {
            const { _products } = payload
            return {
                ...state,
                cartList: [..._products],
            };
        },
        checkoutProducts: (state) => {
            const { cartList } = state
            let __checkPrice = 0;
            let __checkOut = 0;
            cartList.forEach(item => {
                __checkOut += item.quantity;
            })
            cartList.forEach(item => {
                __checkPrice += item.price * item.quantity
            })
            return {
                ...state,
                count: __checkOut,
                sumPrice: __checkPrice

            }
        },
        handleCheck: (state, { payload }) => {
            return {
                ...state,
                check: payload

            }
        },
        _setStorage: (state, { payload }) => {
            const { data, _count, _sumPrice } = payload;
            return {
                ...state,
                cartList: data,
                count: _count,
                sumPrice: _sumPrice,
            }
        },
        addCount: (state, { payload }) => {
            const { id, quantity, size } = payload;
            const { cartList } = state
            let count = 0;
            cartList.forEach(item => {
                if (item.id === id && item.size === size) {
                    item.quantity = quantity;
                }
                count += item.quantity
            })
            return {
                ...state,
                cartList: cartList,
                count: count

            }
        },
        minusCount: (state, { payload }) => {
            const { id, quantity, size } = payload;
            const { cartList } = state
            let count = 0
            cartList.forEach(item => {
                if (item.id === id && item.size === size) {
                    item.quantity = quantity;
                    if (item.quantity <= 0) {
                        cartList.splice(cartList.findIndex((v) => { return v.id === id && v.size === size }), 1)
                    }
                }
                count += item.quantity
            })
            return {
                ...state,
                cartList: cartList,
                count: count,
            }
        },
        handleRemove(state, { payload }) {
            const { cartList } = state;
            const { id, size, quantity } = payload;
            let count = 0
            cartList.forEach(item => {
                if (item.id === id && item.size === size) {
                    item.quantity = quantity
                    cartList.splice(cartList.findIndex(item => item.id === id), 1)
                }
            })
            cartList.forEach(item => {
                count += item.quantity
            })
            return {
                ...state,
                cartList: cartList,
                count: count
            }
        },
        subTotal: (state) => {
            let subTotal = 0
            state.cartList.forEach(item => {
                subTotal = subTotal + item.price * item.quantity
            })
            return {
                ...state,
                sumPrice: subTotal
            }
        },
        handleChecked: (state, { payload }) => {
            return {
                ...state,
                check: payload
            }
        },
        removeCart: (state) => {
            return {
                ...state,
                cartList: [],
                count: 0,
                sumPrice: 0,
            }
        }

    },
}
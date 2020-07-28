
import getProductData from "../api/shop";

export default {
  namespace: "products",
  state: {
    resData: [],
    sortData: [],//排序数据
    // sort: "complex",
    // selectResult: [],
    // selectSizes: [],//选中的尺码

  },
  effects: {

    *initialData({ payload }, { call, put }) {

      try {
        const res = yield call(getProductData.getProducts);
        // const data = yield call(getProductData, payload);
        yield put({
          type: "setProducts",
          payload: res.data.products
        });
      } catch (e) {
        alert(e)
      }
    },
    *selectSize({ payload }, { select, put }) {
      const stateArr = yield select(state => state);
      // console.log("------fffff-===", stateArr)
      const { resData } = stateArr.products
      const data = resData
      const { checkedSizes } = payload;
      let checkedSizesList = []
   
      if (checkedSizes) {
        data.forEach(item => {
              if (item.availableSizes.indexOf(checkedSizes)!==-1) {
                checkedSizesList.push(item)
              }
        
        })
      }

      yield put({
        type: "SelectSize",
        payload: { checkedSizesList }
      });

    },
    *priceSort({ payload }, { select, put }) {
      const stateArr = yield select(state => state);
      const { resData } = stateArr.products
      const { sortData } = stateArr.products
      const resList = resData
      const sortList = sortData
      const { sort } = payload;
      // console.log('=====',sort)
      let resSortList = []
      let sortSortList = []
      if (sort === 'complex') {
        resSortList = resList.sort((a, b) => (a.id - b.id))
        sortSortList = sortList.sort((a, b) => (a.id - b.id))
        // console.log('priceSortList',priceSortList)
      }
      if (sort === 'ASC') {
        resSortList = resList.sort((a, b) => (a.price - b.price))
        sortSortList = sortList.sort((a, b) => (a.price - b.price))
      }
      if (sort === 'DESC') {
        resSortList = resList.sort((a, b) => (b.price - a.price))
        sortSortList = sortList.sort((a, b) => (b.price - a.price))
      }
      // console.log("==========", priceSortList)
      yield put({
        type: "PriceSort",
        payload: {
          resSortList,
          sortSortList
        }
      });
    },


  },
  reducers: {
    setProducts: (state, { payload }) => {
      return {
        ...state,
        resData: payload,
      };
    },
    SelectSize: (state, { payload: { checkedSizesList } }) => {
      return {
        ...state,
        sortData: checkedSizesList,
        // selectSizes: selectSizes
      };
    },
    PriceSort: (state, { payload: { resSortList, sortSortList } }) => {
      return {
        ...state,
        resData: [...resSortList],
        sortData: [...sortSortList],
      };
    },
  }
};

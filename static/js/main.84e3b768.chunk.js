(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{265:function(t,e,a){var r={"./100_1.jpg":503,"./101_1.jpg":504,"./10412368723880252_1.jpg":505,"./10547961582846888_1.jpg":506,"./10686354557628304_1.jpg":507,"./11033926921508488_1.jpg":508,"./11600983276356164_1.jpg":509,"./11854078013954528_1.jpg":510,"./12064273040195392_1.jpg":511,"./18532669286405344_1.jpg":512,"./18644119330491310_1.jpg":513,"./27250082398145996_1.jpg":514,"./39876704341265610_1.jpg":515,"./51498472915966370_1.jpg":516,"./5619496040738316_1.jpg":517,"./6090484789343891_1.jpg":518,"./8552515751438644_1.jpg":519,"./876661122392077_1.jpg":520,"./9197907543445676_1.jpg":521};function n(t){var e=c(t);return a(e)}function c(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=c,t.exports=n,n.id=265},317:function(t,e,a){t.exports=a(605)},384:function(t,e){},475:function(t,e,a){},476:function(t,e,a){},503:function(t,e,a){t.exports=a.p+"static/media/100_1.b5714b6a.jpg"},504:function(t,e,a){t.exports=a.p+"static/media/101_1.b618b5fc.jpg"},505:function(t,e,a){t.exports=a.p+"static/media/10412368723880252_1.2e62289b.jpg"},506:function(t,e,a){t.exports=a.p+"static/media/10547961582846888_1.54fbf816.jpg"},507:function(t,e,a){t.exports=a.p+"static/media/10686354557628304_1.0d941b4c.jpg"},508:function(t,e,a){t.exports=a.p+"static/media/11033926921508488_1.84c82a5a.jpg"},509:function(t,e,a){t.exports=a.p+"static/media/11600983276356164_1.06ec2c62.jpg"},510:function(t,e,a){t.exports=a.p+"static/media/11854078013954528_1.7faf6a31.jpg"},511:function(t,e,a){t.exports=a.p+"static/media/12064273040195392_1.2995d79a.jpg"},512:function(t,e,a){t.exports=a.p+"static/media/18532669286405344_1.d78e2790.jpg"},513:function(t,e,a){t.exports=a.p+"static/media/18644119330491310_1.75f51cec.jpg"},514:function(t,e,a){t.exports=a.p+"static/media/27250082398145996_1.4c799bac.jpg"},515:function(t,e,a){t.exports=a.p+"static/media/39876704341265610_1.a313534c.jpg"},516:function(t,e,a){t.exports=a.p+"static/media/51498472915966370_1.df947f14.jpg"},517:function(t,e,a){t.exports=a.p+"static/media/5619496040738316_1.843a4713.jpg"},518:function(t,e,a){t.exports=a.p+"static/media/6090484789343891_1.45a051e0.jpg"},519:function(t,e,a){t.exports=a.p+"static/media/8552515751438644_1.87b5353e.jpg"},520:function(t,e,a){t.exports=a.p+"static/media/876661122392077_1.df97d7c2.jpg"},521:function(t,e,a){t.exports=a.p+"static/media/9197907543445676_1.59b64365.jpg"},548:function(t,e,a){},549:function(t,e,a){},605:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),c=a(27),o=a.n(c),u=a(28),i=a(29),s=a(31),p=a(30),l=(a(475),a(611)),d=a(615),f=a(612),m=a(122),v=(a(476),function(t){Object(s.a)(r,t);var e=Object(p.a)(r);function r(){var t;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).addToCart=function(e,a){var r=t.props.dispatch;r({type:"cart/addToCart",payload:{currentItem:e,currentSize:a}}),r({type:"cart/setStorage"})},t}return Object(i.a)(r,[{key:"render",value:function(){var t=this,e=this.props.data;return n.a.createElement("div",{className:"card"},n.a.createElement(l.a,{hoverable:!0,style:{width:240},cover:n.a.createElement("img",{alt:"",src:a(265)("./".concat(e.sku,"_1.jpg"))})},n.a.createElement("div",{className:"title"},n.a.createElement("h4",null,e.title)),n.a.createElement("hr",{className:"hrColor"}),n.a.createElement("h2",null,"$",e.price.toFixed(2)),n.a.createElement("p",null," or ",e.installments," x ",(e.price/e.installments).toFixed(2)),n.a.createElement(d.a,{title:"select the size",trigger:"click",content:n.a.createElement(f.b,{size:"large",dataSource:e.availableSizes,renderItem:function(a){return n.a.createElement(f.b.Item,null,n.a.createElement(m.a,{type:"link",key:e.id+a,onClick:function(){return t.addToCart(e,a)},block:!0},a))}})},n.a.createElement(m.a,{type:"primary"},"Add To Cart"))))}}]),r}(n.a.Component)),g=Object(c.connect)((function(t){return{cartData:t.cart.cartData}}))(v),h=(a(548),function(t){Object(s.a)(a,t);var e=Object(p.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"products/initialData"})}},{key:"render",value:function(){var t=this.props.products,e=(0===t.sortData.length?t.resData:t.sortData).map((function(t){return n.a.createElement(g,{data:t,key:t.id})}));return n.a.createElement("div",null,n.a.createElement("div",{className:"productList"},e))}}]),a}(n.a.Component)),y=Object(c.connect)((function(t){return t}))(h),j=a(614),b=a(302),S=a(616),O=a(613),x=(a(98),a(38),a(99)),w=(a(617),a(618),a(549),a(619)),E=function(t){Object(s.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={visible:!1,loading:!1},t.showDrawer=function(){t.setState({visible:!0})},t.onClose=function(){t.setState({visible:!1})},t.changeNumAdd=function(e,a){var r=t.props.dispatch;r({type:"cart/changeNumAdd",payload:{cartProductId:e,cartProductSize:a}}),r({type:"cart/setStorage"})},t.changeNumCut=function(e,a){var r=t.props.dispatch;r({type:"cart/changeNumCut",payload:{cartProductId:e,cartProductSize:a}}),r({type:"cart/setStorage"})},t.removeProduct=function(e,a){var r=t.props.dispatch;r({type:"cart/removeProduct",payload:{cartProductId:e,cartProductSize:a}}),r({type:"cart/setStorage"})},t.checkout=function(e){var a=t.props.dispatch;t.setState({loading:!0}),setTimeout((function(){a({type:"cart/checkout",payload:{payload:{checkProduct:e}}}),a({type:"cart/setStorage"}),t.setState({loading:!1,visible:!1}),j.a.success({content:"payment successful",okText:"Buy Again"})}),1e3)},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"cart/getStorage"}),this.setState({loading:!1})}},{key:"render",value:function(){var t=this,e=this.state,a=e.placement,r=e.visible,c=e.loading,o=this.props.cart,u=n.a.createElement("div",null,n.a.createElement("div",{className:"foot"},n.a.createElement("h3",null,"SUBTOTAL"),n.a.createElement("p",{style:{color:"red",fontSize:"18px"}},"$ ",o.sunPrice?o.sunPrice.toFixed(2):"")),n.a.createElement(b.a,{spinning:c,delay:100},n.a.createElement(m.a,{type:"link",onClick:function(){return t.checkout(o.cartData)},disabled:0===o.cartData.length||!0===c||"",style:{padding:0,fontSize:"22px",width:"100%",textAlign:"center",background:"#ffccc7",height:"40px"}},"\u53bb\u7ed3\u7b97")));return n.a.createElement(n.a.Fragment,null,n.a.createElement(S.a,{count:o.numProduct},n.a.createElement(m.a,{type:"primary",onClick:this.showDrawer,size:"large",icon:n.a.createElement(w.a,null)},"Your cart")),n.a.createElement(O.a,{title:"Your cart",placement:"right",onClose:this.onClose,visible:r,key:a,width:520,footer:u,footerStyle:{background:"#fff1f0",padding:"20px"}},0!==o.cartData.length?o.cartData.map((function(t){})):n.a.createElement(x.a,null)))}}]),a}(n.a.Component),P=Object(c.connect)((function(t){return t}))(E),_=a(610),k=function(t){Object(s.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={value:""},t.onChange=function(e){t.setState({value:e.target.value}),(0,t.props.dispatch)({type:"products/selectSize",payload:{checkedSizes:e.target.value}})},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this.state.value;return n.a.createElement("div",null,"\u5c3a\u7801\u9009\u62e9\uff1a",n.a.createElement(_.default.Group,{options:[{label:"XS",value:"XS"},{label:"S",value:"S"},{label:"M",value:"M"},{label:"ML",value:"ML"},{label:"L",value:"L"},{label:"XL",value:"XL"},{label:"XXL",value:"XXL"}],onChange:this.onChange,value:t}),n.a.createElement("br",null),n.a.createElement("br",null))}}]),a}(n.a.Component),D=Object(c.connect)((function(t){return t}))(k),C=a(124),N=C.a.Option,z=function(t){Object(s.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).handleChange=function(e){var a=t.props.dispatch;console.log("value-----",e.value),a({type:"products/priceSort",payload:{sort:e.value}})},t}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,"\u4ef7\u683c\u6392\u5e8f\uff1a",n.a.createElement(C.a,{labelInValue:!0,defaultValue:{value:"complex"},style:{width:120},onChange:this.handleChange},n.a.createElement(N,{value:"complex"},"\u7efc\u5408\u6392\u5e8f"),n.a.createElement(N,{value:"ASC"},"\u4ef7\u683c\u5347\u5e8f"),n.a.createElement(N,{value:"DESC"},"\u4ef7\u683c\u964d\u5e8f")),",")}}]),a}(n.a.Component),L=Object(c.connect)((function(t){return t}))(z),A=(a(587),function(t){Object(s.a)(a,t);var e=Object(p.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"product"},n.a.createElement("div",{className:"filter"},n.a.createElement(D,null),n.a.createElement(L,null)),n.a.createElement(y,null)),n.a.createElement("div",{className:"cartLayout"},n.a.createElement(P,null))))}}]),a}(n.a.Component)),I=a(9),J=a(10),T=a.n(J),X={namespace:"cart",state:{sunPrice:0,numProduct:0,cartData:[],sizeList:[]},effects:{addToCart:T.a.mark((function t(e,a){var r,n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,n=a.put,t.next=4,n({type:"CartList",payload:r});case 4:case"end":return t.stop()}}),t)})),setStorage:T.a.mark((function t(e,a){var r,n,c,o,u,i,s,p,l,d;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.select,n=a.put,t.next=3,r((function(t){return t}));case 3:return c=t.sent,o=c.cart,u=o.cartData,i=o.sunPrice,s=o.numProduct,p=JSON.stringify(u),l=JSON.stringify(i),d=JSON.stringify(s),window.localStorage.setItem("cart",p),window.localStorage.setItem("_sunPrice",l),window.localStorage.setItem("_numProduct",d),t.next=13,n({type:"SetStorage",payload:{data:JSON.parse(window.localStorage.cart),_sunPrice:JSON.parse(window.localStorage._sunPrice),_numProduct:JSON.parse(window.localStorage._numProduct)}});case 13:case"end":return t.stop()}}),t)})),getStorage:T.a.mark((function t(e,a){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload,r=a.put,t.next=4,r({type:"SetStorage",payload:{data:window.localStorage.cart?JSON.parse(window.localStorage.cart):[],_sunPrice:window.localStorage._sunPrice?JSON.parse(window.localStorage._sunPrice):"",_numProduct:window.localStorage._numProduct?JSON.parse(window.localStorage._numProduct):""}});case 4:case"end":return t.stop()}}),t)})),changeNumAdd:T.a.mark((function t(e,a){var r,n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,n=a.put,t.next=4,n({type:"NumAdd",payload:r});case 4:case"end":return t.stop()}}),t)})),changeNumCut:T.a.mark((function t(e,a){var r,n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,n=a.put,t.next=4,n({type:"NumCut",payload:r});case 4:case"end":return t.stop()}}),t)})),removeProduct:T.a.mark((function t(e,a){var r,n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,n=a.put,t.next=4,n({type:"removePro",payload:r});case 4:case"end":return t.stop()}}),t)})),checkout:T.a.mark((function t(e,a){var r,n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,n=a.put,t.next=4,n({type:"cartCheckout",payload:r});case 4:case"end":return t.stop()}}),t)}))},reducers:{CartList:function(t,e){var a=e.payload,r=a.currentItem,n=a.currentSize,c=t.cartData,o=0,u=0,i=0;return c.forEach((function(t){t.id===r.id&&t.size===n?(t.num+=1,t.productPrice=t.num*t.price):o++,u+=t.num})),c.length===o&&(c.push(Object(I.a)(Object(I.a)({},r),{},{size:n,num:1})),u+=1),c.forEach((function(t){i+=t.price*t.num})),Object(I.a)(Object(I.a)({},t),{},{cartData:c,sunPrice:i,numProduct:u})},SetStorage:function(t,e){var a=e.payload,r=a.data,n=a._sunPrice,c=a._numProduct;return Object(I.a)(Object(I.a)({},t),{},{cartData:r,sunPrice:n,numProduct:c})},NumAdd:function(t,e){var a=e.payload,r=a.cartProductId,n=a.cartProductSize;console.log("==NumAdd==",r,n);var c=t.cartData,o=0,u=0;return c.forEach((function(t){t.id===r&&t.size===n&&(t.num++,t.productPrice=t.num*t.price),o+=t.num})),c.forEach((function(t){u+=t.price*t.num})),Object(I.a)(Object(I.a)({},t),{},{cartData:c,sunPrice:u,numProduct:o})},NumCut:function(t,e){var a=e.payload,r=a.cartProductId,n=a.cartProductSize;console.log("==NumCut==",r,n);var c=t.cartData,o=0,u=0;return console.log("==cartData==",c.size,n),c.forEach((function(t){t.id===r&&t.size===n&&(t.num--,t.productPrice=t.num*t.price),0===t.num&&(t.num=0,c.splice(c.findIndex((function(t){return t.id===r&&t.size===n})),1)),o+=t.num})),c.forEach((function(t){u+=t.price*t.num})),Object(I.a)(Object(I.a)({},t),{},{cartData:c,sunPrice:u,numProduct:o})},removePro:function(t,e){var a=e.payload,r=a.cartProductId,n=a.cartProductSize,c=t.cartData,o=0,u=0;return c.forEach((function(t){t.id===r&&t.size===n&&(t.num=0,c.splice(c.findIndex((function(t){return t.id===r})),1)),o+=t.num})),c.forEach((function(t){u+=t.price*t.num})),Object(I.a)(Object(I.a)({},t),{},{cartData:c,sunPrice:u,numProduct:o})},cartCheckout:function(t,e){e.payload.checkProduct;return Object(I.a)(Object(I.a)({},t),{},{cartData:[],sunPrice:"",numProduct:""})}}},M=o()();M.model(a(607).default),M.model(X),M.router((function(){return n.a.createElement(A,null)})),M.start("#root")},607:function(t,e,a){"use strict";a.r(e);var r=a(210),n=a(9),c=a(10),o=a.n(c),u=a(310),i=a.n(u),s=function(){return i.a.get("/products.json")};e.default={namespace:"products",state:{resData:[],sortData:[]},effects:{initialData:o.a.mark((function t(e,a){var r,n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload,r=a.call,n=a.put,t.prev=2,t.next=5,r(s);case 5:return c=t.sent,t.next=8,n({type:"setProducts",payload:c.data.products});case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),alert(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})),selectSize:o.a.mark((function t(e,a){var r,n,c,u,i,s,p,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,n=a.select,c=a.put,t.next=4,n((function(t){return t}));case 4:return u=t.sent,i=u.products.resData,s=i,p=r.checkedSizes,l=[],p&&s.forEach((function(t){-1!==t.availableSizes.indexOf(p)&&l.push(t)})),t.next=12,c({type:"SelectSize",payload:{checkedSizesList:l}});case 12:case"end":return t.stop()}}),t)})),priceSort:o.a.mark((function t(e,a){var r,n,c,u,i,s,p,l,d,f,m;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,n=a.select,c=a.put,t.next=4,n((function(t){return t}));case 4:return u=t.sent,i=u.products.resData,s=u.products.sortData,p=i,l=s,d=r.sort,f=[],m=[],"complex"===d&&(f=p.sort((function(t,e){return t.id-e.id})),m=l.sort((function(t,e){return t.id-e.id}))),"ASC"===d&&(f=p.sort((function(t,e){return t.price-e.price})),m=l.sort((function(t,e){return t.price-e.price}))),"DESC"===d&&(f=p.sort((function(t,e){return e.price-t.price})),m=l.sort((function(t,e){return e.price-t.price}))),t.next=17,c({type:"PriceSort",payload:{resSortList:f,sortSortList:m}});case 17:case"end":return t.stop()}}),t)}))},reducers:{setProducts:function(t,e){var a=e.payload;return Object(n.a)(Object(n.a)({},t),{},{resData:a})},SelectSize:function(t,e){var a=e.payload.checkedSizesList;return Object(n.a)(Object(n.a)({},t),{},{sortData:a})},PriceSort:function(t,e){var a=e.payload,c=a.resSortList,o=a.sortSortList;return Object(n.a)(Object(n.a)({},t),{},{resData:Object(r.a)(c),sortData:Object(r.a)(o)})}}}}},[[317,1,2]]]);
//# sourceMappingURL=main.84e3b768.chunk.js.map
webpackJsonp([3],{"1nh/":function(t,e,i){"use strict";var s=i("GQaK"),a=i("Au9i"),c={data:function(){return{hour:"",min:"",sec:"",secData:[{oldprice:"145",newprice:"1",img:"seckill-1.jpg"},{oldprice:"279",newprice:"99",img:"seckill-2.jpg"},{oldprice:"4499",newprice:"3988",img:"seckill-3.jpg"},{oldprice:"6999",newprice:"6688",img:"seckill-4.jpg"},{oldprice:"68.1",newprice:"51.1",img:"seckill-5.jpg"},{oldprice:"258",newprice:"89",img:"seckill-6.jpg"},{oldprice:"999",newprice:"798",img:"seckill-7.jpg"},{oldprice:"3699",newprice:"3649",img:"seckill-8.jpg"},{oldprice:"799",newprice:"478",img:"seckill-9.jpg"},{oldprice:"99",newprice:"59.9",img:"seckill-10.jpg"},{oldprice:"329",newprice:"99",img:"seckill-11.jpg"},{oldprice:"729",newprice:"559",img:"seckill-12.jpg"},{oldprice:"2299",newprice:"1949",img:"seckill-13.jpg"},{oldprice:"93",newprice:"69.9",img:"seckill-14.jpg"},{oldprice:"125",newprice:"99",img:"seckill-15.jpg"},{oldprice:"99",newprice:"62.5",img:"seckill-16.jpg"}]}},created:function(){this.$nextTick(function(){var t=this;this.interval=setInterval(function(){t.sec>0?t.sec--:(t.sec=60,t.min>0?t.min--:(t.min=60,t.hour--)),0===t.hour&&0===t.min&&0===t.sec&&clearInterval(t.interval)},1e3)})},filters:{},mounted:function(){this.$nextTick(function(){this.secscroll=new s.a(this.$refs.seckillWrapper,{scrollX:!0,click:!0}),this.getDate()})},methods:{linkToast:function(){Object(a.Toast)({message:"暂无链接，待后续完成！",position:"middle",duration:1200})},getDate:function(){var t=new Date;this.hour=24-t.getHours(),this.min=60-t.getMinutes(),this.sec=60-t.getSeconds()}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"seckill-floor"},[i("div",{staticClass:"seckill-floor-title"},[i("div",{staticClass:"seckill-floor-title-text"},[t._v("\n      京东秒杀\n    ")]),t._v(" "),i("div",{staticClass:"seckill-floor-title-time"},[i("span",[t._v(t._s(t.hour))]),t._v("\n      : "),i("span",[t._v(t._s(t.min))]),t._v("\n      : "),i("span",[t._v(t._s(t.sec))])])]),t._v(" "),i("div",{staticClass:"seckill-floor-swipe"},[i("div",{ref:"seckillWrapper",staticClass:"seckillWrapper"},[i("ul",{staticClass:"seckillContent",style:{width:70*t.secData.length+"px"}},t._l(t.secData,function(e,s){return i("li",{key:s,on:{click:function(e){t.linkToast()}}},[i("img",{attrs:{src:"static/img/sec/"+e.img,alt:""}}),t._v(" "),i("p",{staticClass:"newprice"},[t._v("￥"),i("span",[t._v(t._s(e.newprice))])]),t._v(" "),i("p",{staticClass:"oldprice"},[t._v("￥"),i("span",[t._v(t._s(e.oldprice))])])])}))])])])},staticRenderFns:[]};var l=i("VU/8")(c,n,!1,function(t){i("xmNQ")},null,null);e.a=l.exports},pKwG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("1XYx"),a=i("1nh/"),c=i("Op5q"),n=i("Au9i"),l={data:function(){return{cartTextData:["登录后可同步购物车中商品","购物车空空如也,去逛逛吧~"],cartListData:"",totalPrice:0,storageList:"",selectAllFlag:!1,selectNum:0,selectedNum:0,curProduct:"",btn:!0}},created:function(){this.$nextTick(function(){this.getCartListData();var t=window.localStorage;t.getItem("cartList")&&(this.storageList=t.getItem("cartList").split(",")),this.renewRender(),t.getItem("loginUserName")&&(this.$store.state.isLogin=!0)})},mounted:function(){this.$nextTick(function(){})},filters:{formatPrice:function(t){return t.split(".")[0]}},computed:{islogin:function(){return this.$store.state.isLogin},hasStorage:function(){return this.$store.state.loginStorage}},components:{titlebar:s.a,SecKill:a.a},methods:{toLogin:function(){this.$store.state.selectTab="mine",this.$router.push("/mine")},getCartListData:function(){var t=window.localStorage.getItem("cartList"),e=[];if(t){for(var i=t.split(","),s=0;s<i.length;s++){var a=i[s].split("-"),n=a[0],l=a[1],o=a[2];c.a[n][l].amount=o,e.push(c.a[n][l])}this.cartListData=e}},changeNum:function(t,e){e>0?t.amount++:(t.amount--,t.amount<1&&(t.amount=1)),this.countTotalPrice()},selecteGoods:function(t){void 0===t.select?this.$set(t,"select",!0):t.select=!t.select,this.countTotalPrice(),this.selectProductNum(),this.checkAllNum(),this.checkBtn()},countTotalPrice:function(){var t=this;t.totalPrice=0,t.cartListData.forEach(function(e,i){e.select&&(t.totalPrice+=e.price*e.amount)})},selectAll:function(){this.selectAllFlag=!this.selectAllFlag;var t=this;t.cartListData.forEach(function(e,i){void 0===e.select?t.$set(e,"select",t.selectAllFlag):e.select=t.selectAllFlag}),this.countTotalPrice(),this.selectProductNum(),this.checkBtn()},checkBtn:function(){for(var t=0;t<this.cartListData.length;t++){if(this.cartListData[t].select){this.btn=!1;break}this.btn=!0}},checkAllNum:function(){this.selectedNum=0;for(var t=0;t<this.cartListData.length;t++)this.cartListData[t].select&&this.selectedNum++;this.selectedNum===this.cartListData.length?this.selectAllFlag=!0:this.selectAllFlag=!1},selectProductNum:function(){var t=this;t.selectNum=0,t.cartListData.forEach(function(e,i){e.select&&t.selectNum++})},delConfirm:function(t){var e=this;this.curProduct=t,n.MessageBox.confirm("是否确认删除此商品?").then(function(t){e.delProduct()}).catch(function(){})},delProduct:function(){var t=this.cartListData.indexOf(this.curProduct);this.cartListData.splice(t,1),this.storageList.splice(t,1),this.renewStorage(),this.renewRender()},renewStorage:function(){localStorage.removeItem("cartList"),localStorage.setItem("cartList",this.storageList)},renewRender:function(){var t=window.localStorage.getItem("cartList");this.$store.state.loginStorage=!!t},subitBtn:function(){var t=this,e=window.localStorage;e.getItem("storage")?this.btn||n.MessageBox.alert("恭喜你结算成功,请等待收货！").then(function(i){e.removeItem("cartList"),t.cartListData="",t.$store.state.loginStorage=!1}).catch(function(){}):n.MessageBox.alert("请先登录后在结算").then(function(e){t.toLogin()})}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"shopcart-floor"}},[i("titlebar",{attrs:{title:"购物车",isShowBack:!1}}),t._v(" "),i("div",{attrs:{id:"shop-bg"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasStorage,expression:"!hasStorage"}],staticClass:"nologin"},[i("img",{staticClass:"empty_img",attrs:{src:"static/img/enpty-cart.png",alt:""}}),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:!t.islogin,expression:"!islogin"}],staticClass:"empty_txt"},[t._v(t._s(t.cartTextData[0]))]),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:t.islogin,expression:"islogin"}],staticClass:"empty_txt"},[t._v(t._s(t.cartTextData[1]))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.islogin,expression:"!islogin"}],staticClass:"tologin_btn",on:{click:function(e){t.toLogin()}}},[t._v("登录")]),t._v(" "),i("img",{attrs:{src:"static/img/5aa9d5a0N17c36092.jpg",alt:""}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.hasStorage,expression:"hasStorage"}],staticClass:"shopCartList"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.islogin,expression:"!islogin"}],staticClass:"shopcart_login_bar"},[t._v("\n        登录后可同步账户购物车中的商品\n        "),i("div",{staticClass:"shopcart_login_bar_btn",on:{click:function(e){t.toLogin()}}},[t._v("登录")])]),t._v(" "),i("div",{staticClass:"cartList_content"},t._l(t.cartListData,function(e,s){return i("div",{key:s,staticClass:"cart_item"},[i("div",{staticClass:"cart_item_info"},[i("div",{staticClass:"icon_select",class:{selected:e.select},on:{click:function(i){t.selecteGoods(e)}}}),t._v(" "),i("div",{staticClass:"cart_item_img"},[i("img",{attrs:{src:"static/products/"+e.img,alt:""}})]),t._v(" "),i("span",{staticClass:"cart_item_title"},[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"goods_line"},[i("div",{staticClass:"goods_price"},[i("span",[t._v("\n                ￥\n                "),i("em",{staticClass:"int"},[t._v(t._s(t._f("formatPrice")(e.price)))]),t._v("\n                .00\n              ")])]),t._v(" "),i("div",{staticClass:"num_and_more"},[i("div",{staticClass:"num_wrap"},[i("span",{staticClass:"minus",on:{click:function(i){t.changeNum(e,-1)}}}),t._v(" "),i("div",{staticClass:"input_wrap"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"item.amount"}],staticClass:"num",attrs:{type:"text",value:"1"},domProps:{value:e.amount},on:{input:function(i){i.target.composing||t.$set(e,"amount",i.target.value)}}})]),t._v(" "),i("span",{staticClass:"plus",on:{click:function(i){t.changeNum(e,1)}}})])])]),t._v(" "),i("p",{staticClass:"cart_item_del",on:{click:function(i){t.delConfirm(e)}}},[t._v("删除")])])}))])]),t._v(" "),i("SecKill"),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.hasStorage,expression:"hasStorage"}],staticClass:"payBar"},[i("div",{staticClass:"payBar_content"},[i("div",{staticClass:"icon_select_all",class:{selected:t.selectAllFlag},on:{click:function(e){t.selectAll()}}}),t._v(" "),i("div",{staticClass:"pay_txt"},[t._v("总计：\n        "),i("strong",{staticClass:"total_price"},[t._v("￥"+t._s(t.totalPrice)+".00")])]),t._v(" "),i("div",{staticClass:"pay_btn",class:{buy:!t.btn},attrs:{disabled:t.btn},on:{click:function(e){t.subitBtn()}}},[t._v("\n        去结算\n        "),i("em",[t._v("("+t._s(t.selectNum)+"件)")])])])])],1)},staticRenderFns:[]};var r=i("VU/8")(l,o,!1,function(t){i("plxp")},null,null);e.default=r.exports},plxp:function(t,e){},xmNQ:function(t,e){}});
//# sourceMappingURL=3.c2f95726ee843dd3b436.js.map
webpackJsonp([5],{OIH9:function(t,s){},uE0w:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=e("Op5q"),o={name:"productList",data:function(){return{sortData:[{id:"1",name:"综合",img:"trianglechoose.png"},{id:"2",name:"销量",img:"triangle.png"},{id:"3",name:"价格",img:"triangle.png"},{id:"4",name:"价格",img:"up.png"}],sortselected:0,productListIndex:this.$store.state.productListIndex,toJSON:"",productdata:""}},created:function(){this.$nextTick(function(){this.$store.state.tabShow=!1})},mounted:function(){this.$nextTick(function(){this.productdata=r.a[this.productListIndex],this.sortselected=this.$store.state.sortSelected})},filters:{formatBigmoney:function(t){return"￥"+Number(t).toFixed(0)},formatSmallmoney:function(t){return"."+t.split(".")[1]}},computed:{otherSortSelected:function(){return this.$store.state.otherSortSelected}},watch:{otherSortSelected:function(){this.sortselected=this.otherSortSelected},sortselected:{handler:function(t,s){0===this.sortselected?(this.sortData[0].img="trianglechoose.png",this.$store.state.sortSelected=0):this.sortData[0].img="triangle.png",1===this.sortselected?(this.sortData[1].img="trianglechoose.png",this.$store.state.sortSelected=1):this.sortData[1].img="triangle.png",2===this.sortselected?(this.sortData[2].img="trianglechoose.png",this.$store.state.sortSelected=2):this.sortData[2].img="triangle.png",3===this.sortselected?(this.sortData[3].img="upchoose.png",this.$store.state.sortSelected=3):this.sortData[3].img="up.png"}}},methods:{back:function(){this.$store.state.tabShow=!0,this.$router.push("/catagory"),this.productSort(0),this.$store.state.sortSelected=0},sortselect:function(t){this.sortselected=t,this.productSort(t),this.$store.state.sortSelected=t},productSort:function(t){switch(t){case 0:this.productdata.sort(this.defaultSort);break;case 1:this.productdata.sort(this.salesSort);break;case 2:this.productdata.sort(this.downSort);break;case 3:this.productdata.sort(this.upSort)}},defaultSort:function(t,s){return t.id-s.id},salesSort:function(t,s){return s.comment-t.comment},downSort:function(t,s){return s.price-t.price},upSort:function(t,s){return t.price-s.price},toProduct:function(t){this.$router.push("/product"),this.$store.state.productIndex=t,this.$store.state.toProduct="productList"}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("header",{staticClass:"productListHeader"},[e("div",{staticClass:"back",on:{click:function(s){t.back()}}},[e("img",{attrs:{src:"static/img/arrow_left.png",alt:""}})]),t._v(" "),e("div",{staticClass:"sortbar"},[e("ul",t._l(t.sortData,function(s,r){return e("li",{key:s.id,staticClass:"sortli",class:{sortselected:t.sortselected==r},on:{click:function(s){t.sortselect(r)}}},[e("span",[t._v("\n            "+t._s(s.name)+"\n            "),e("img",{attrs:{src:"static/img/"+s.img,alt:""}})])])}))])]),t._v(" "),e("div",{staticClass:"productsBody"},[e("ul",t._l(t.productdata,function(s,r){return e("li",{key:r,staticClass:"productli",on:{click:function(s){t.toProduct(r)}}},[e("img",{staticClass:"productImg",attrs:{src:"static/products/"+s.img,alt:""}}),t._v(" "),e("div",{staticClass:"productInfoBox"},[e("div",{staticClass:"productName"},[t._v("\n            "+t._s(s.title)+"\n          ")]),t._v(" "),e("div",{staticClass:"gray-icon"}),t._v(" "),e("div",{staticClass:"product-price-m"},[e("em",[e("span",{staticClass:"big-price"},[t._v(t._s(t._f("formatBigmoney")(s.price)))]),t._v(" "),e("span",{staticClass:"small-price"},[t._v(t._s(t._f("formatSmallmoney")(s.price)))])])]),t._v(" "),e("div",{staticClass:"gray-pro-info"},[e("span",{staticClass:"self-sale"},[t._v("自营")]),t._v(" "),e("span",[t._v(t._s(s.comment)+"条评论")]),t._v(" "),e("span",[t._v("99%好评")])])])])}))])])},staticRenderFns:[]};var a=e("VU/8")(o,i,!1,function(t){e("OIH9")},null,null);s.default=a.exports}});
//# sourceMappingURL=5.9a80d202dd0d3c2fb133.js.map
"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[851],{851:function(t,s,i){i.r(s),i.d(s,{default:function(){return v}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"order-right"},[s("div",{staticClass:"order-content"},[t._m(0),t._m(1),s("div",{staticClass:"orders"},t._l(this.records,(function(i){return s("table",{key:i.id,staticClass:"order-item"},[s("thead",[s("tr",[s("th",{attrs:{colspan:"5"}},[s("span",{staticClass:"ordertitle"},[t._v(t._s(i.createTime)+"　订单编号："+t._s(i.outTradeNo)+" "),t._m(2,!0)])])])]),s("tbody",t._l(i.orderDetailList,(function(i){return s("tr",{key:i.id},[s("td",{attrs:{width:"60%"}},[s("div",{staticClass:"typographic"},[s("img",{attrs:{src:i.imgUrl,width:"82px"}}),s("a",{staticClass:"block-text",attrs:{href:"#"}},[t._v(t._s(i.skuName))]),s("span",[t._v("x1")]),s("a",{staticClass:"service",attrs:{href:"#"}},[t._v("售后申请")])])]),s("td",{staticClass:"center",attrs:{rowspan:"2",width:"8%"}},[t._v("小丽")]),t._m(3,!0),t._m(4,!0),t._m(5,!0)])})),0)])})),0),s("div",{staticClass:"choose-order"},[s("div",{staticClass:"pagination"},[s("pagination")],1)])]),t._m(6)])},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"title"},[s("h3",[t._v("团购订单")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"chosetype"},[s("table",[s("thead",[s("tr",[s("th",{attrs:{width:"29%"}},[t._v("商品")]),s("th",{attrs:{width:"31%"}},[t._v("订单详情")]),s("th",{attrs:{width:"13%"}},[t._v("收货人")]),s("th",[t._v("金额")]),s("th",[t._v("状态")]),s("th",[t._v("操作")])])])])])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"pull-right delete"},[s("img",{attrs:{src:i(9269)}})])},function(){var t=this,s=t._self._c;return s("td",{staticClass:"center",attrs:{rowspan:"2",width:"13%"}},[s("ul",{staticClass:"unstyled"},[s("li",[t._v("总金额¥138.00")]),s("li",[t._v("在线支付")])])])},function(){var t=this,s=t._self._c;return s("td",{staticClass:"center",attrs:{rowspan:"2",width:"8%"}},[s("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("已完成 ")])])},function(){var t=this,s=t._self._c;return s("td",{staticClass:"center",attrs:{rowspan:"2",width:"13%"}},[s("ul",{staticClass:"unstyled"},[s("li",[s("a",{attrs:{href:"mycomment.html",target:"_blank"}},[t._v("评价|晒单")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"like"},[s("h4",{staticClass:"kt"},[t._v("猜你喜欢")]),s("ul",{staticClass:"like-list"},[s("li",{staticClass:"likeItem"},[s("div",{staticClass:"p-img"},[s("img",{attrs:{src:i(3782)}})]),s("div",{staticClass:"attr"},[s("em",[t._v("DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本")])]),s("div",{staticClass:"price"},[s("em",[t._v("¥")]),s("i",[t._v("3699.00")])]),s("div",{staticClass:"commit"},[t._v("已有6人评价 ")])]),s("li",{staticClass:"likeItem"},[s("div",{staticClass:"p-img"},[s("img",{attrs:{src:i(4604)}})]),s("div",{staticClass:"attr"},[t._v(" Apple苹果iPhone 6s/6s Plus 16G 64G 128G ")]),s("div",{staticClass:"price"},[s("em",[t._v("¥")]),s("i",[t._v("4388.00")])]),s("div",{staticClass:"commit"},[t._v("已有700人评价 ")])]),s("li",{staticClass:"likeItem"},[s("div",{staticClass:"p-img"},[s("img",{attrs:{src:i(4949)}})]),s("div",{staticClass:"attr"},[t._v("DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本 ")]),s("div",{staticClass:"price"},[s("em",[t._v("¥")]),s("i",[t._v("4088.00")])]),s("div",{staticClass:"commit"},[t._v("已有700人评价 ")])]),s("li",{staticClass:"likeItem"},[s("div",{staticClass:"p-img"},[s("img",{attrs:{src:i(5626)}})]),s("div",{staticClass:"attr"},[t._v("DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本 ")]),s("div",{staticClass:"price"},[s("em",[t._v("¥")]),s("i",[t._v("4088.00")])]),s("div",{staticClass:"commit"},[t._v("已有700人评价 ")])])])])}],e=i(3822),l={name:"TeamOrder",data(){return{page:"1",limit:"5"}},mounted(){this.getOrderlist()},methods:{getOrderlist(){this.$store.dispatch("Center/getOrderList",{page:this.page,limit:this.limit})}},computed:{...(0,e.rn)("Center",["orderlist"]),records(){return this.orderlist.records}}},c=l,n=i(1001),d=(0,n.Z)(c,a,r,!1,null,null,null),v=d.exports}}]);
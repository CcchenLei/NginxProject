(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28b42dba"],{"6df8":function(e,t,n){},d3bb:function(e,t,n){"use strict";n("6df8")},e936:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.skuList.length<1,expression:"skuList.length<1"}],attrs:{border:"",data:e.skuList}},[n("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),n("el-table-column",{attrs:{prop:"skuName",label:"名称",align:"center"}}),n("el-table-column",{attrs:{prop:"skuDesc",label:"描述",align:"center"}}),n("el-table-column",{attrs:{prop:"date",label:"默认图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[n("img",{staticStyle:{width:"100px"},attrs:{src:t.skuDefaultImg}})]}}])}),n("el-table-column",{attrs:{prop:"weight",label:"重量",align:"center"}}),n("el-table-column",{attrs:{prop:"price",label:"价格",align:"center"}}),n("el-table-column",{attrs:{prop:"date",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[0==a.isSale?n("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-upload2",title:"上架"},on:{click:function(t){return e.onSale(a)}}}):n("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-download",title:"下架"},on:{click:function(t){return e.cancelSale(a)}}}),n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-scissors",title:"修改"},on:{click:e.editSku}}),n("el-button",{attrs:{type:"info",size:"mini",icon:"el-icon-tickets",title:"查看"},on:{click:function(t){return e.checkInfo(a)}}}),n("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",title:"删除"},on:{click:function(t){return e.deleteSku(a)}}})]}}])})],1),n("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"current-page":e.page,"page-sizes":[3,5,7,9],"page-size":e.limit,layout:" prev, pager, next, jumper,->,total, sizes",total:e.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}}),n("el-drawer",{attrs:{visible:e.isShowDrawer,direction:"rtl",size:"40%"},on:{"update:visible":function(t){e.isShowDrawer=t},closed:e.closeDrawer}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.skuInfo.id,expression:"!skuInfo.id"}]},[n("el-row",[n("el-col",{attrs:{span:5}},[e._v("名称 ")]),n("el-col",{attrs:{span:16}},[e._v(e._s(e.skuInfo.skuName)+" ")])],1),n("el-row",[n("el-col",{attrs:{span:5}},[e._v("描述 ")]),n("el-col",{attrs:{span:16}},[e._v(" "+e._s(e.skuInfo.skuDesc)+" ")])],1),n("el-row",[n("el-col",{attrs:{span:5}},[e._v("价格 ")]),n("el-col",{attrs:{span:16}},[e._v(" "+e._s(e.skuInfo.price)+" ")])],1),n("el-row",[n("el-col",{attrs:{span:5}},[e._v(" 平台属性 ")]),n("el-col",{staticClass:"coltag",attrs:{span:16}},e._l(e.skuInfo.skuAttrValueList,(function(t){return n("el-tag",{key:t.id,staticClass:"attrTag",attrs:{type:"success"}},[e._v(e._s(t.attrName))])})),1)],1),n("el-row",[n("el-col",{attrs:{span:5}},[e._v("商品图片 ")]),n("el-col",{attrs:{span:16}},[n("el-carousel",{attrs:{interval:4e3,type:"card",height:"260px",arrow:"never","indicator-position":"none",border:""}},e._l(e.skuInfo.skuImageList,(function(e){return n("el-carousel-item",{key:e.id},[n("img",{staticStyle:{height:"260px"},attrs:{src:e.imgUrl}})])})),1)],1)],1)],1)])],1)},s=[],r=n("c7eb"),i=n("1da1"),c={name:"Sku",data:function(){return{isShowDrawer:!1,page:1,limit:5,total:null,skuList:[],skuInfo:{}}},mounted:function(){this.getSkuList()},methods:{getSkuList:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function t(){var n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$API.sku.reqGetSkuList(e.page,e.limit);case 2:n=t.sent,200==n.code&&(e.skuList=n.data.records,e.page=n.data.current,e.pages=n.data.pages,e.total=n.data.total);case 4:case"end":return t.stop()}}),t)})))()},sizeChange:function(e){this.limit=e,this.getSkuList()},pageChange:function(e){this.page=e,this.getSkuList()},onSale:function(e){var t=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var a;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$API.sku.reqOnSale(e.id);case 2:a=n.sent,200==a.code?t.$message({type:"success",message:"上传成功"}):t.$message({type:"warning",message:"上传错误，请稍后再试"}),t.getSkuList();case 5:case"end":return n.stop()}}),n)})))()},cancelSale:function(e){var t=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var a;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$API.sku.reqCancelSale(e.id);case 2:a=n.sent,200==a.code?t.$message({type:"success",message:"下架成功"}):t.$message({type:"warning",message:"下架错误，请稍后再试"}),t.getSkuList();case 5:case"end":return n.stop()}}),n)})))()},deleteSku:function(e){var t=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var a;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$API.sku.reqDeleteSku(e.id);case 2:a=n.sent,200==a.code?t.$message({type:"success",message:"删除成功"}):t.$message({type:"warning",message:"删除失败，请稍后再试"}),t.getSkuList();case 5:case"end":return n.stop()}}),n)})))()},editSku:function(){this.$message({type:"info",message:"此功能暂未开发",center:!0})},checkInfo:function(e){var t=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var a;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.isShowDrawer=!0,n.next=3,t.$API.sku.reqGetSkuById(e.id);case 3:a=n.sent,200==a.code&&(t.skuInfo=a.data);case 5:case"end":return n.stop()}}),n)})))()},closeDrawer:function(){this.skuInfo={}}}},l=c,o=(n("d3bb"),n("2877")),u=Object(o["a"])(l,a,s,!1,null,null,null);t["default"]=u.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ef77a6b"],{"02a5":function(e,t,a){},"1d33":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{staticStyle:{margin:"10px 10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.openDialog}},[e._v("添加")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:!e.trademark.records,expression:"!trademark.records"}],staticStyle:{width:"100%"},attrs:{data:e.trademark.records,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center"}}),a("el-table-column",{attrs:{prop:"tmName",label:"品牌名称",align:"center"}}),a("el-table-column",{attrs:{prop:"logoUrl",label:"品牌LOGO",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[a("img",{staticStyle:{height:"70px"},attrs:{src:t.logoUrl}})]}}])}),a("el-table-column",{attrs:{prop:"address",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-button",{attrs:{type:"warning",icon:"el-icon-edit"},on:{click:function(t){return e.updedatradeMark(r)}}},[e._v("修改")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(t){return e.deletetradeMark(r)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{attrs:{align:"center","current-page":e.trademark.current,"page-size":e.trademark.size,total:e.trademark.total,"page-sizes":[3,5,10],layout:"prev, pager, next, jumper, -> ,sizes,total"},on:{"current-change":e.changePage,"size-change":e.changeSize}}),a("el-dialog",{attrs:{title:e.tmFrom.id?"修改品牌":"添加品牌",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{staticStyle:{width:"700px"},attrs:{modal:e.tmFrom}},[a("el-form-item",{attrs:{label:"品牌名称","label-width":"100px"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.tmFrom.tmName,callback:function(t){e.$set(e.tmFrom,"tmName",t)},expression:"tmFrom.tmName"}})],1),a("el-form-item",{attrs:{label:"品牌LOGO","label-width":"100px"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{drag:"",action:"/admin/product/upload","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.tmFrom.logoUrl?a("img",{staticClass:"avatar",attrs:{src:e.tmFrom.logoUrl}}):a("i",{staticClass:"el-icon-plus el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过2mb")])])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1)],1)},s=[],i=a("c7eb"),o=a("1da1"),l=a("5530"),n=a("2f62"),c={name:"TardeMark",data:function(){return{page:1,limit:3,dialogFormVisible:!1,tmFrom:{tmName:"",logoUrl:""}}},mounted:function(){this.getTrademarkList()},methods:{getTrademarkList:function(){this.$store.dispatch("tradeMark/getTradeMark",{page:this.page,limit:this.limit})},changePage:function(e){this.page=e,this.getTrademarkList()},changeSize:function(e){this.limit=e,this.getTrademarkList()},openDialog:function(){this.dialogFormVisible=!0},updedatradeMark:function(e){this.dialogFormVisible=!0,this.tmFrom=Object(l["a"])({},e)},handleAvatarSuccess:function(e,t){this.tmFrom.logoUrl=e.data},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a},cancel:function(){this.dialogFormVisible=!1,this.tmFrom.tmName="",this.tmFrom.logoUrl="",this.tmFrom.id=!1},confirm:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var a,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.dialogFormVisible=!1,!e.tmFrom.id){t.next=8;break}return t.next=4,e.$API.tradeMark.requpdateTradeMark(e.tmFrom);case 4:a=t.sent,200==a.code?e.$message({message:"修改成功",type:"success"}):e.$message({message:"修改失败",type:"error"}),t.next=12;break;case 8:return t.next=10,e.$API.tradeMark.reqAddTradeMark(e.tmFrom);case 10:r=t.sent,200==r.code?e.$message({message:"添加成功",type:"success"}):e.$message({message:"修改失败",type:"error"});case 12:e.getTrademarkList(),e.tmFrom.tmName="",e.tmFrom.logoUrl="",e.tmFrom.id=!1;case 16:case"end":return t.stop()}}),t)})))()},deletetradeMark:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function a(){var r;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$API.tradeMark.reqDeleteTradeMark(e.id);case 2:r=a.sent,200===r.code?t.$message({message:"删除成功",type:"success"}):t.$message({message:"删除失败",type:"error"}),t.getTrademarkList();case 5:case"end":return a.stop()}}),a)})))()}},computed:Object(l["a"])({},Object(n["c"])("tradeMark",["trademark"]))},m=c,d=(a("b8f1"),a("2877")),u=Object(d["a"])(m,r,s,!1,null,null,null);t["default"]=u.exports},b8f1:function(e,t,a){"use strict";a("02a5")}}]);